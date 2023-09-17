import { type Product } from "@/ui/types/product";
import { ProductList } from "@/ui/organisms/ProductList";

const producs: Product[] = [
	{
		id: "1",
		name: "Headphones",
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

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={producs} />
		</main>
	);
}
