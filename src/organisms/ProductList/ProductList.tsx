import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productServices";
import ProductLoading from "../../molecules/ProductLoading/ProductLoading";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import React from "react";
import { InView } from "react-intersection-observer";

const ProductList = () => {
	const ProductListLoading = () => {
		return (
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
				{
					[...Array(6)].map((_, i) => <ProductLoading key={i} />)
				}
			</div>
		);
	}

	const limit = 12;
	const {
		data,
		isLoading,
		isError,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage
	} = useInfiniteQuery({
		queryKey: ['products'],
		queryFn: ({ pageParam = 0 }) => {
			return getProducts('', limit, pageParam);
		},
		getNextPageParam: (lastPage) => {
			return lastPage.skip + limit;
		}
	});

	if (isLoading) {
		return <ProductListLoading />
	}

	if (isError && error instanceof Error) {
		return error.message
	}

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
				{
					data?.pages.map((group, groupKey) => (
						<React.Fragment key={groupKey}>
							{
								group.products.map(product => <ProductCard key={product.id} product={product} />)
							}
						</React.Fragment>
					))
				}
			</div>
			<InView as="div" onChange={(inView) => inView ? fetchNextPage() : null}>
				<button
					onClick={() => fetchNextPage()}
					disabled={!hasNextPage || isFetchingNextPage}
				>
					{isFetchingNextPage
						? 'Loading more...'
						: hasNextPage
							? 'Load More'
							: 'Nothing more to load'}
				</button>
			</InView>
			<div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
		</>
	);
}

export default ProductList;
