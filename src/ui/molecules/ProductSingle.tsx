import { ProductSingleImage } from "@/ui/atoms/ProductSingleImage";
import { ProductSingleDetails } from "@/ui/atoms/ProductSingleDetails";
import { type Product } from "@/ui/types/product";

type Props = {
	product: Product;
};

export const ProductSingle = ({ product }: Props) => {
	return (
		<div className="grid grid-rows-2 gap-4 md:grid-cols-2 md:gap-16">
			<ProductSingleImage image={product.thumbnail} />
			<ProductSingleDetails product={product} />
		</div>
	);
};
