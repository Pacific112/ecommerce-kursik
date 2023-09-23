import { type Product } from "@/ui/types/product";

const products: Product[] = [
	{
		id: "1",
		name: "Headphones",
		description: "These are the best headphones in the world.",
		price: {
			currency: "USD",
			cents: 99.99,
		},
		thumbnail: {
			alt: "Headphones",
			src: "/headphones.png",
		},
	},
	{
		id: "2",
		name: "Headphones 2",
		description: "These are second best headphones in the world.",
		price: {
			currency: "USD",
			cents: 99.99,
		},
		thumbnail: {
			alt: "Headphones 2",
			src: "/headphones.png",
		},
	},
	{
		id: "3",
		name: "Headphones 3",
		description: "These are third best headphones in the world.",
		price: {
			currency: "USD",
			cents: 99.99,
		},
		thumbnail: {
			alt: "Headphones 3",
			src: "/headphones.png",
		},
	},
	{
		id: "4",
		name: "Headphones 4",
		description: "These are fourth best headphones in the world.",
		price: {
			currency: "USD",
			cents: 99.99,
		},
		thumbnail: {
			alt: "Headphones 4",
			src: "/headphones.png",
		},
	},
	{
		id: "5",
		name: "Headphones 5",
		description: "These are fifth best headphones in the world.",
		price: {
			currency: "USD",
			cents: 99.99,
		},
		thumbnail: {
			alt: "Headphones 5",
			src: "/headphones.png",
		},
	},
];

export const getProducts = (): Promise<Product[]> => {
	return new Promise((resolve) => resolve(products));
};

export const getProduct = (id: string): Promise<Product | undefined> => {
	return new Promise((resolve) => resolve(products.find((p) => p.id === id)));
};
