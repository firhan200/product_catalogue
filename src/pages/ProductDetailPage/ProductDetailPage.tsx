/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/productServices";
import ProductLoading from "../../molecules/ProductLoading/ProductLoading";
import ProductDetail from "../../organisms/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
	const { id } = useParams();

	if(typeof id === 'undefined'){
		return <>Product Not Found</>
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

	if(isLoading){
		return <ProductLoading />
	}

	if(isError && error instanceof Error){
		return error.message;
	}

	if(data === null){
		return "Not Found"
	}

	return <ProductDetail product={ data! }/>;
}

export default ProductDetailPage;
