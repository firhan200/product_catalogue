import EmptyCart from "../../atoms/EmptyCart/EmptyCart";
import useCart from "../../hooks/useCart";
import CartCard from "../../molecules/CartCard/CartCard";

export default function CartList() {
	const { items } = useCart();

	return (
		<div className="grid gap-12">
			{
				items.length > 0 ?
				items.map((cart, key) => (
					<CartCard key={key} cart={cart} />
				)) : <EmptyCart />
			}
		</div>
	);
}
