import { useCallback, useState } from "react";
import useCart from "../../hooks/useCart";
import useNotification from "../../hooks/useNotification";

type ProductQtySelectProps = {
	productId: number,
	stock: number,
	qty: number
}

export default function ProductQtySelect({ productId, stock, qty }: ProductQtySelectProps) {
	const [selectedQty, setSelectedQty] = useState<number>(qty);

	const { updateProductQty } = useCart();
	const { show } = useNotification();

	const updateQty = useCallback((newValue: number) => {
		if(productId === 0){
			return alert("product not found");
		}
		if(newValue === 0){
			return alert("quantity cannot be empty");
		}

		setSelectedQty(newValue)
		updateProductQty(productId, newValue);
		show("Quantity updated: " + newValue);
	}, [productId, show, updateProductQty]);

	return (
		<select value={selectedQty} onChange={(e) => updateQty(parseInt(e.target.value))} className="select select-bordered w-full" required>
			<option disabled value="0">Select Quantity</option>
			{
				[...Array(stock)].map((_, index) => (
					<option key={index} value={index + 1}>{index + 1}</option>
				))
			}
		</select>
	);
}
