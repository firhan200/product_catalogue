import ImageViewer from "../../molecules/ImageViewer/ImageViewer";
import ProductInfo from "../../molecules/ProductInfo/ProductInfo";
import { Product } from "../../services/productServices";

export default function ProductDetail({ product }: { product: Product }){
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			<ImageViewer images={product.images}/>
			<div className="col-span-1 md:col-span-2">
				<ProductInfo product={product}/>
			</div>
		</div>
	)
}
