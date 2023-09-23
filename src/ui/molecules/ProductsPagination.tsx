import { PaginationLink } from "@/ui/atoms/PaginationLink";

type Props = {
	currentPage: number;
	isLastPage: boolean;
};

export const ProductsPagination = ({ currentPage, isLastPage }: Props) => {
	const isFirstPage = currentPage === 1;

	return (
		<nav aria-label="pagination">
			<ul className="flex flex-row gap-3">
				{!isFirstPage && (
					<>
						<PaginationLink href={`/products/${currentPage - 1}`}>{"<"}</PaginationLink>
						<PaginationLink href={`/products/${currentPage - 1}`}>{currentPage - 1}</PaginationLink>
					</>
				)}
				<PaginationLink href={`/products/${currentPage}`}>{currentPage}</PaginationLink>
				{!isLastPage && (
					<>
						<PaginationLink href={`/products/${currentPage + 1}`}>{currentPage + 1}</PaginationLink>
						<PaginationLink href={`/products/${currentPage + 1}`}>{">"}</PaginationLink>
					</>
				)}
			</ul>
		</nav>
	);
};
