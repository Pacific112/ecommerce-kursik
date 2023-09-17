import clsx from "clsx";
import { type Product } from "@/ui/types/product";
import { formatPrice } from "@/ui/utils/formatPrice";

type Props = {
	product: Product;
	className: string;
};

export const ProductDescription = ({ product: { name, price }, className }: Props) => (
	<div className={clsx("text-black", className)}>
		<h3 className="text-sm">{name}</h3>
		<div className="text-xs font-bold">{formatPrice(price)}</div>
	</div>
);
