import { ActiveLink, type ActiveLinkProps } from "@/ui/atoms/ActiveLink";

type Props<T extends string> = Pick<ActiveLinkProps<T>, "href" | "children">;

export function PaginationLink<T extends string>({ href, children }: Props<T>) {
	return (
		<li className="h-4 w-4">
			<ActiveLink
				href={href}
				activeClassName="text-emerald-500 hover:text-emerald-500"
				className="hover:text-emerald-700 hover:underline"
				exact
			>
				{children}
			</ActiveLink>
		</li>
	);
}
