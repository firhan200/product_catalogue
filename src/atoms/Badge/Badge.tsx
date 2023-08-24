export default function Badge({ label }: { label:string }){
	return (
		<div className="badge bg-base-300 p-3">{ label }</div>
	);
}
