import { type Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductPageCount, getProducts } from "@/api/productsApi";

export const metadata: Metadata = {
	title: "Products",
	description: "Page with all products",
};

export async function generateStaticParams(): Promise<{ pageNumber: string }[]> {
	const pageCount = await getProductPageCount();

	const params = [];
	for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
		params.push({ pageNumber: pageNumber.toString() });
	}

	return params;
}

const ProductsPage = async ({ params }: { params: { pageNumber: string } }) => {
	const { pageNumber: pageNumberParam } = params;
	const pageNumber = parseInt(pageNumberParam);
	const {
		products,
		meta: { isLastPage },
	} = await getProducts(pageNumber - 1);

	return (
		<main className="flex w-full flex-col items-center gap-4 p-16">
			<h1 className="text-3xl font-bold">Search for products!</h1>
			<ProductList products={products} isLastPage={isLastPage} currentPage={pageNumber} />
		</main>
	);
};

export default ProductsPage;
