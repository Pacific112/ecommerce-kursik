import { fetch } from "next/dist/compiled/@edge-runtime/primitives";
import { type Product } from "@/ui/types/product";
import { mapProductResponseToProduct, type ProductsResponse } from "@/api/productResponses";

const API_URL = "https://naszsklep-api.vercel.app/api/products?take=20";

export const getProducts = async (): Promise<Product[]> => {
	const response = await fetch(API_URL);
	const jsonResponse = (await response.json()) as ProductsResponse;

	return jsonResponse.map(mapProductResponseToProduct);
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
	return (await getProducts()).find((product) => product.id === id);
};
