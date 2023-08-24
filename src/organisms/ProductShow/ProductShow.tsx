import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productServices";
import ProductLoading from "../../molecules/ProductLoading/ProductLoading";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import CategoryTitle from "../../molecules/CategoryTitle/CategoryTitle";

export default function ProductShow({ category }: { category: string }) {
	const LoadingState = () => {
		return (
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
				{
					[...Array(6)].map((_, index) => (
						<ProductLoading key={index} />
					))
				}
			</div>
		);
	}

	const {
		isLoading,
		data,
		isError,
		error
	} = useQuery({
		queryKey: ['product_category', category],
		queryFn: () => {
			return getProducts('', category, 16, 0);
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
		<div className="my-8 mb-20">
			<CategoryTitle title={category} />
			<div className="flex flex-nowrap overflow-x-auto scrollable gap-8">
				{
					data?.products.map(product => <ProductCard key={product.id} product={product} />)
				}
			</div>
		</div>
	);
}
