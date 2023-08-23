export default function Alert({ message }: { message: string }){
	return (
		<div className="alert alert-info">
			{ message }
		</div>
	)
}
