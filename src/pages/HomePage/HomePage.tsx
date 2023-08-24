import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/productServices";
import ProductLoading from "../../molecules/ProductLoading/ProductLoading";
import ProductShowLazy from "../../organisms/ProductShow/ProductShowLazy";
const HomePage = () => {
	const LoadingState = () => {
		return (
			<>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
					{
						[...Array(6)].map((_, index) => (
							<ProductLoading key={index} />
						))
					}
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
					{
						[...Array(6)].map((_, index) => (
							<ProductLoading key={index} />
						))
					}
				</div>
			</>
		);
	}

	const {
		data,
		isLoading,
		isError,
		error
	} = useQuery({
		queryKey: ['categories'],
		queryFn: () => {
			return getCategories();
		}
	});

	if (isLoading) {
		return <LoadingState />
	}

	if (isError && error instanceof Error) {
		return error.message;
	}

	if (data === null) {
		return "No data..";
	}

	return (
		<>
			<ProductShowLazy category="laptops" />
			<ProductShowLazy category="smartphones" />
			<ProductShowLazy category="skincare" />
			<ProductShowLazy category="mens-watches" />
			<ProductShowLazy category="skincare" />
			<ProductShowLazy category="fragrances" />
			<ProductShowLazy category="lighting" />
		</>
	);
}

export default HomePage;
