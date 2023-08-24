export default function Price({ price }: { price: number }){
	const priceFormat = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<div className="text-xl place-content-center">{ priceFormat.format(price) }</div>
	);
}
