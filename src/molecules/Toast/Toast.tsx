export default function Toast({ children }: { children: React.ReactNode }){
	return (
		<div className="toast toast-end">
			{ children }
		</div>
	)
}
