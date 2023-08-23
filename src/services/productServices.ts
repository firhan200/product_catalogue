import axios from "axios"

const API_URL: string = import.meta.env.VITE_API_URL;

export interface GetProductsResponse {
	products: Product[]
	total: number
	skip: number
	limit: number
}

export interface Product {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}

export const getProducts = async (search: string, limit: number, skip: number) : Promise<GetProductsResponse> => {
	let responseModel : GetProductsResponse = <GetProductsResponse>{
		products: [],
		limit: limit,
		skip: skip,
		total: 0
	};

	let url = `${API_URL}products/`;

	//paginate
	url += `?skip=${skip}&limit=${limit}`;

	//check if searching
	if (search !== '') {
		url += `&q=${search}`;
	}

	const res = await axios.get(url);
	responseModel = <GetProductsResponse>res.data;

	return responseModel;
}
