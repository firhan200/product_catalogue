import { Link } from "react-router-dom";
import ProductDescription from "../../atoms/ProductDescription/ProductDescription";
import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import { Product } from "../../services/productServices";
import StarRating from "../../atoms/StarRating/StarRating";

type ProductCardProps = {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="card card-compact w-full bg-base-100 shadow-xl dark:shadow-gray-800">
			<figure><img src={product.thumbnail} alt={product.title} /></figure>
			<div className="card-body">
				<Link to={`/products/${product.id}`}><ProductTitle title={ product.title }/></Link>
				<ProductDescription description={ product.description }/>
				<StarRating rating={product.rating}/>
			</div>
		</div>
	);
}

export default ProductCard;
