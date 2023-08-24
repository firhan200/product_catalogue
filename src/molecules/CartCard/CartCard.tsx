import { useQuery } from "@tanstack/react-query";
import Image from "../../atoms/Image/Image";
import { CartItem } from "../../hooks/useCart";
import { getProduct } from "../../services/productServices";
import SkeletonLoading from "../../atoms/SkeletonLoading/SkeletonLoading";
import { SkeletonLoadingType } from "../../atoms/SkeletonLoading/SkeletonLoadingType";
import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import ProductDescription from "../../atoms/ProductDescription/ProductDescription";
import Price from "../../atoms/Price/Price";
import ProductQtySelect from "../../atoms/ProductQtySelect/ProductQtySelect";
import RemoveCart from "../../atoms/RemoveCart/RemoveCart";

export default function CartCard({ cart }: { cart: CartItem }) {
	const LoadingState = () => {
		return (
			<div className="grid grid-cols-1 md:grid-cols-7 gap-6 justify-items-center md:justify-items-start place-items-center">
				<SkeletonLoading type={SkeletonLoadingType.square} width={100} height={100} />
				<div className="md:col-span-3 w-full">
					<SkeletonLoading type={SkeletonLoadingType.square} height={30} />
					<br/>
					<SkeletonLoading type={SkeletonLoadingType.square} height={30} />
				</div>
				<div className="md:col-span-2 grid grid-cols-2 place-items-center gap-4">
					<SkeletonLoading type={SkeletonLoadingType.square} width={50} height={30} />
					<SkeletonLoading type={SkeletonLoadingType.square} width={50} height={30} />
				</div>
				<SkeletonLoading type={SkeletonLoadingType.square} width={50} height={30} />
			</div>
		);
	}

	const {
		data,
		isLoading,
		error,
		isError
	} = useQuery({
		queryKey: ['product', cart.productId.toString()],
		queryFn: () => {
			return getProduct(cart.productId.toString());
		}
	})

	if (isLoading) {
		return <LoadingState />
	}

	if (isError && error instanceof Error) {
		return error.message;
	}

	if (data === null) {
		return "Not Found";
	}

	const { id, thumbnail, title, description, price, stock } = data!;

	return (
		<div className="grid grid-cols-1 md:grid-cols-7 gap-6 justify-items-center md:justify-items-start place-items-center">
			<Image src={thumbnail} />
			<div className="md:col-span-3">
				<ProductTitle title={title} />
				<ProductDescription description={description} />
			</div>
			<div className="md:col-span-2 grid grid-cols-2 place-items-center">
				<ProductQtySelect productId={id} qty={cart.qty} stock={stock} />
				<Price price={cart.qty * price} />
			</div>
			<RemoveCart productId={id} />
		</div>
	);
}
