import ProductLoading from "../../molecules/ProductLoading/ProductLoading";
import { InView } from "react-intersection-observer";
import { Suspense, lazy, useState } from "react";
const ProductShow = lazy(() => import('./ProductShow'));

export default function ProductShowLazy({ category }: { category: string }) {
	const [isShown, setIsShown] = useState(false);

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

	const setComponentInView = (inView: boolean) => {
		console.log(inView, category);
		if (isShown) {
			return;
		}

		if (inView) {
			setIsShown(true);
		}
	}

	return (
		<InView as="div" onChange={(inView) => setComponentInView(inView)}>
			<Suspense fallback={ <LoadingState /> }>
				{
					isShown ? <ProductShow category={category} /> : null
				}
			</Suspense>
		</InView>
	);
}
