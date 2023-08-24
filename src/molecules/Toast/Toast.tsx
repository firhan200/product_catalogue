export default function Toast({ children }: { children: React.ReactNode }){
	return (
		<div className="toast toast-top lg:toast-bottom lg:toast-end">
			{ children }
		</div>
	)
}
