import { useCartState } from "../context/cart";

export default function CartPage({ product }) {
  const state = useCartState();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
