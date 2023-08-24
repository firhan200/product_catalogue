import AddToCart from "../../atoms/AddToCart/AddToCart";
import Badge from "../../atoms/Badge/Badge";
import Price from "../../atoms/Price/Price";
import ProductDescription from "../../atoms/ProductDescription/ProductDescription";
import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import StarRating from "../../atoms/StarRating/StarRating";
import { Product } from "../../services/productServices";

export default function ProductInfo({ product }: { product: Product }) {
	return (
		<div className="flex flex-col gap-1">
			<ProductTitle title={product.title} />
			<Badge label={product.category} />
			<div className="flex gap-4 my-4">
				<Price price={product.price} />
				<StarRating rating={product.rating} />
			</div>
			<ProductDescription description={product.description} />
			<AddToCart productId={product.id} stock={product.stock}/>
		</div>
	);
}
