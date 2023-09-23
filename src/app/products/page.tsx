import { type Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/productsApi";

export const metadata: Metadata = {
	title: "Products",
	description: "Page with all products",
};

const ProductsPage = async () => {
	const products = await getProducts();

	return (
		<main className="flex w-full flex-col items-center gap-4 p-16">
			<h1 className="text-3xl font-bold">Search for products!</h1>
			<ProductList products={products} />
		</main>
	);
};

export default ProductsPage;
