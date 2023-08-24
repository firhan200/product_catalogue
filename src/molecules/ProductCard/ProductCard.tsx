import { Link } from "react-router-dom";
import ProductDescription from "../../atoms/ProductDescription/ProductDescription";
import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import { Product } from "../../services/productServices";
import StarRating from "../../atoms/StarRating/StarRating";
import Badge from "../../atoms/Badge/Badge";
import Price from "../../atoms/Price/Price";

type ProductCardProps = {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="card card-compact w-full bg-base-100 shadow-xl dark:shadow-gray-800">
			<figure><img src={product.thumbnail} alt={product.title} /></figure>
			<div className="card-body">
				<Link to={`/products/${product.id}`}><ProductTitle title={product.title} /></Link>
				<Badge label={product.category} />
				<ProductDescription description={product.description} />
				<div className="flex justify-between">
					<StarRating rating={product.rating} />
					<Price price={product.price} />
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
