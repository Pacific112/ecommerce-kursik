import Link from "next/link";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type Product } from "@/ui/types/product";

type Props = {
	product: Product;
};

export const ProductListItem = ({ product }: Props) => (
	<Link href={`/products/${product.id}`}>
		<article className="rounded-2xl border bg-white px-2 py-3 shadow hover:shadow-lg">
			<ProductListItemImage image={product.thumbnail} />
			<ProductListItemDescription product={product} className="mt-3" />
		</article>
	</Link>
);
