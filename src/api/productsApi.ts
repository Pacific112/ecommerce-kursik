import { fetch } from "next/dist/compiled/@edge-runtime/primitives";
import { type Product } from "@/ui/types/product";
import { mapProductResponseToProduct, type ProductsResponse } from "@/api/productResponses";

const API_ROOT_URL = "https://naszsklep-api.vercel.app";
const DEFAULT_PAGE_SIZE = 8;

type ProductsSearchParams = {
	pageSize: number;
	pageNumber: number;
};
const buildProductsUrl = ({ pageSize, pageNumber }: ProductsSearchParams) => {
	const url = new URL(API_ROOT_URL);
	url.pathname = `/api/products`;
	url.searchParams.set("take", pageSize.toString());
	url.searchParams.set("offset", (pageNumber * pageSize).toString());

	return url.toString();
};

const buildProductUrl = (id: string) => {
	const url = new URL(API_ROOT_URL);
	url.pathname = `/api/products/${id}`;

	return url.toString();
};

export const getProducts = async (pageNumber: number) => {
	const productsUrl = buildProductsUrl({ pageSize: DEFAULT_PAGE_SIZE, pageNumber });
	const response = await fetch(productsUrl);

	const jsonResponse = (await response.json()) as ProductsResponse;
	const products = jsonResponse.map(mapProductResponseToProduct);

	return {
		products,
		meta: {
			isLastPage: products.length !== DEFAULT_PAGE_SIZE,
		},
	};
};

export const getProductPageCount = async () => {
	const productsUrl = buildProductsUrl({ pageSize: 10_000, pageNumber: 0 });
	const response = await fetch(productsUrl);

	const jsonResponse = (await response.json()) as ProductsResponse;

	return Math.ceil(jsonResponse.length / DEFAULT_PAGE_SIZE)
}

export const getProduct = (id: string): Promise<Product | undefined> => {
	return fetch(buildProductUrl(id))
		.then((response) => response.json())
		.then(mapProductResponseToProduct);
};
