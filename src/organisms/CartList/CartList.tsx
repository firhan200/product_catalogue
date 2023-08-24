import useCart from "../../hooks/useCart";
import CartCard from "../../molecules/CartCard/CartCard";

export default function CartList() {
	const { items } = useCart();

	return (
		<div className="grid gap-12">
			{
				items.map((cart, key) => (
					<CartCard key={key} cart={cart} />
				))
			}
		</div>
	);
}
