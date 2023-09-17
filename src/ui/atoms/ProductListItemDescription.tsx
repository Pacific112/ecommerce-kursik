import clsx from "clsx";
import { type Product } from "@/ui/types/product";
import { formatPrice } from "@/ui/utils/formatPrice";

type Props = {
	product: Product;
	className: string;
};

export const ProductDescription = ({ product: { name, price }, className }: Props) => (
	<div className={clsx("text-black", className)}>
		<div className="text-sm">{name}</div>
		<div className="text-xs font-bold">{formatPrice(price)}</div>
	</div>
);
