import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProduct } from "@/api/productsApi";
import { ProductSingle } from "@/ui/molecules/ProductSingle";

type Props = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const product = await getProduct(params.productId);
	if (!product) {
		return notFound();
	}

	return {
		title: `Product - ${product.name}`,
		description: product.description,
		openGraph: {
			description: product.description,
			title: `Product - ${product.name}`,
			images: {
				url: product.thumbnail.src,
			},
		},
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
