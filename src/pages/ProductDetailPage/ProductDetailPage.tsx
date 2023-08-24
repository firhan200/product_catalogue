/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/productServices";
import ProductDetail from "../../organisms/ProductDetail/ProductDetail";
import SkeletonLoading from "../../atoms/SkeletonLoading/SkeletonLoading";
import { SkeletonLoadingType } from "../../atoms/SkeletonLoading/SkeletonLoadingType";

const ProductDetailPage = () => {
	const { id } = useParams();

	if (typeof id === 'undefined') {
		return <>Product Not Found</>
	}

	const LoadingState = () => {
		return (
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<SkeletonLoading type={SkeletonLoadingType.square} height={300} />
					<div className="flex gap-2 justify-start overflow-hidden mt-3">
						{
							[...Array(4)].map((_, key) => <SkeletonLoading key={key} type={SkeletonLoadingType.square} width={100} height={100}/>)
						}
					</div>
				</div>
				<div className="col-span-2">
					<SkeletonLoading type={SkeletonLoadingType.square} height={30} />
					<div className="flex my-4 gap-4">
						<SkeletonLoading type={SkeletonLoadingType.square} width={100} height={30} />
						<SkeletonLoading type={SkeletonLoadingType.square} width={100} height={30} />
					</div>
					<SkeletonLoading type={SkeletonLoadingType.square} height={50} />
				</div>
			</div>
		);
	}

	const {
		data,
		isLoading,
		isError,
		error
	} = useQuery({
		queryKey: ['product', id],
		queryFn: () => {
			return getProduct(id);
		}
	})

	if (isLoading) {
		return <LoadingState />
	}

	if (isError && error instanceof Error) {
		return error.message;
	}

	if (data === null) {
		return "Not Found"
	}

	return <ProductDetail product={data!} />;
}

export default ProductDetailPage;
