import { useState } from "react";
import useCart from "../../hooks/useCart"
import useNotification from "../../hooks/useNotification";

export default function AddToCart({ productId, stock }: { productId: number, stock: number }) {
	const { addToCart } = useCart();
	const { show } = useNotification();

	const [qty, setQty] = useState<number>(0);

	const submit = (e: React.FormEvent) => {
		e.preventDefault();

		if (qty < 1) {
			return alert("Please select quantity");
		}

		addToCart(productId, qty);

		show("Successfully added to cart");
	}

	const onQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(e.target.value);
		setQty(value);
	}

	return (
		<form onSubmit={submit} className="mt-4">
			<select value={qty} onChange={onQtyChange} className="select select-bordered w-full max-w-xs" required>
				<option disabled value="0">Select Quantity</option>
				{
					[...Array(stock)].map((_, index) => (
						<option key={index} value={index + 1}>{index + 1}</option>
					))
				}
			</select>
			<button className="btn btn-default">Add to Cart</button>
		</form>
	)
}
