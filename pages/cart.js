import { useCartState } from "../context/cart";

export default function CartPage() {
  const { line_items } = useCartState();

  return <pre>{JSON.stringify(line_items, null, 2)}</pre>;
}
