const Container = ({ children } : { children: React.ReactNode }) => {
	return (
		<div className="container mx-auto px-6 my-6">
			{ children }
		</div>
	);
}

export default Container;
