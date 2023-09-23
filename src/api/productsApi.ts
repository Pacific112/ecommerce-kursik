import { fetch } from "next/dist/compiled/@edge-runtime/primitives";
import { type Product } from "@/ui/types/product";
import { mapProductResponseToProduct, type ProductsResponse } from "@/api/productResponses";

const API_ROOT_URL = "https://naszsklep-api.vercel.app";

const buildProductsUrl = () => {
	const url = new URL(API_ROOT_URL);
	url.pathname = `/api/products`;

	return url.toString();
};

const buildProductUrl = (id: string) => {
	const url = new URL(API_ROOT_URL);
	url.pathname = `/api/products/${id}`;

	return url.toString();
};

export const getProducts = async (): Promise<Product[]> => {
	const response = await fetch(buildProductsUrl());
	const jsonResponse = (await response.json()) as ProductsResponse;

	return jsonResponse.map(mapProductResponseToProduct);
};

export const getProduct = (id: string): Promise<Product | undefined> => {
	return fetch(buildProductUrl(id))
		.then((response) => response.json())
		.then(mapProductResponseToProduct);
};
