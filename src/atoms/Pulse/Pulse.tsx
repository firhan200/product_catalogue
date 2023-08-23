const Pulse = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="animate-pulse">
			{children}
		</div>
	);
}

export default Pulse;
