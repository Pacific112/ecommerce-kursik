import { type Product } from "@/ui/types/product";

type RatingResponse = {
	rate: number;
	count: number;
};

export type ProductResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: RatingResponse;
	image: string;
	longDescription: string;
};

export type ProductsResponse = ProductResponse[];

export const mapProductResponseToProduct = (product: ProductResponse): Product => ({
	id: product.id,
	name: product.title,
	price: {
		cents: product.price,
		currency: "PLN",
	},
	thumbnail: {
		src: product.image,
		alt: product.title,
	},
	description: product.description,
});
