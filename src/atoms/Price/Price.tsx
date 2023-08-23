export default function Price({ price }: { price: number }){
	return (
		<div className="text-xl">${ price }</div>
	);
}
