import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type Product } from "@/ui/types/product";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";

type Props = {
	products: Product[];
	currentPage: number;
	isLastPage: boolean;
};

export const ProductList = ({ products, isLastPage, currentPage }: Props) => (
	<div className="flex flex-col gap-4 justify-center items-center">
		<ul
			data-testid="products-list"
			className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
		<ProductsPagination currentPage={currentPage} isLastPage={isLastPage} />
	</div>
);
