import { notFound } from "next/navigation";
import { getProduct } from "@/api/productsApi";
import { ProductSingle } from "@/ui/molecules/ProductSingle";

type Props = {
	params: {
		productId: string;
	};
};

const SingleProductPage = async ({ params }: Props) => {
	const { productId } = params;
	const product = await getProduct(productId);

	if (!product) {
		return notFound();
	}

	return (
		<main className="flex w-full flex-col items-center p-16">
			<ProductSingle product={product} />
		</main>
	);
};

export default SingleProductPage;
