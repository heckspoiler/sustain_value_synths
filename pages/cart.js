import { useCartState } from "../context/cart";

function CartItem({ name, quantity, line_total }) {
  return (
    <div>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{line_total.formatted_with_symbol}</p>
    </div>
  );
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState();

  const isEmpty = line_items.length === 0;
  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Cart</h2>

      {line_items.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}

      <hr />

      <p>
        <strong>Subtotal:</strong> {subtotal.formatted_with_symbol}
      </p>
    </div>
  );
}
