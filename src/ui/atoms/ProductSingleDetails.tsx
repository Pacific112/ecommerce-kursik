import { formatPrice } from "@/ui/utils/formatPrice";
import { type Product } from "@/ui/types/product";

type Props = {
	product: Product;
};

export const ProductSingleDetails = ({ product }: Props) => {
	return (
		<div className="space-y-2 md:space-y-4 md:py-16">
			<h1 className="text-xl">{product.name}</h1>
			<div className="font-semibold">{formatPrice(product.price)}</div>
			<div>{product.description}</div>
		</div>
	);
};
