import { createContext, useReducer, useEffect, useContext } from "react";
import commerce from "../lib/commerce";

console.log("commerce:", commerce);

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const SET_CART = "SET_CART";

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart();
  }, []);

  const setCart = (payload) => dispatch({ type: SET_CART, payload });

  const getCart = async () => {
    try {
      const cartResponse = await commerce.cart.retrieve();
      console.log("API Cart Response:", cartResponse);
      setCart(cartResponse);
    } catch (error) {
      console.error("Error retrieving cart:", error);
    }
  };

  return (
    <CartDispatchContext.Provider value={{ setCart, getCart }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
