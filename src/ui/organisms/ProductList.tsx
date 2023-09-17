import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type Product } from "@/ui/types/product";

type Props = {
	products: Product[];
};

export const ProductList = ({ products }: Props) => (
	<ul data-testid="products-list" className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
		{products.map((product) => (
			<li key={product.id}>
				<ProductListItem product={product} />
			</li>
		))}
	</ul>
);
