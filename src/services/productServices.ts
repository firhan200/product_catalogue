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

export const getProducts = async (search: string, category: string, limit: number, skip: number): Promise<GetProductsResponse> => {
	let responseModel: GetProductsResponse = <GetProductsResponse>{
		products: [],
		limit: limit,
		skip: skip,
		total: 0
	};

	let url = `${API_URL}products/`;

	//check if searching
	if (search !== '') {
		url += `search?q=${search}&`;
	}
	else {
		if (category !== '' && category !== null) {
			url += `category/${category}`;
		}
	}

	//paginate
	url += `?skip=${skip}&limit=${limit}`;

	const res = await axios.get(url);
	responseModel = <GetProductsResponse>res.data;

	return responseModel;
}

export const getProduct = async (id: string): Promise<Product | null> => {
	const res = await axios.get(`${API_URL}products/${id}`);
	return res.data;
}


export const getCategories = async () : Promise<string[]> => {
	const res = await axios.get(`${API_URL}products/categories`);
	return res.data;
}
