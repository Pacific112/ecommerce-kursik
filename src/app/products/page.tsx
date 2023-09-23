import { type Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Products",
	description: "Page with all products",
};

const ProductsPage = async () => {
	redirect("/products/1");
};

export default ProductsPage;
