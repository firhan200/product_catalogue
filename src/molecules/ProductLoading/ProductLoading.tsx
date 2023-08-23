import SkeletonLoading from "../../atoms/SkeletonLoading/SkeletonLoading";
import { SkeletonLoadingType } from "../../atoms/SkeletonLoading/SkeletonLoadingType";

const ProductLoading = () => {
	return (
		<div className="w-full bg-base-100 shadow-xl p-12 flex flex-col gap-6">
			<SkeletonLoading isCenter={true} width={100} height={100} type={SkeletonLoadingType.round} />
			<SkeletonLoading height={20} type={SkeletonLoadingType.square} />
			<SkeletonLoading height={40} type={SkeletonLoadingType.square} />
			<SkeletonLoading width={'20%'} height={40} type={SkeletonLoadingType.square} />
		</div>

	);
}

export default ProductLoading;
