import { ActiveLink, type ActiveLinkProps } from "@/ui/atoms/ActiveLink";

type Props<T extends string> = Pick<ActiveLinkProps<T>, "href" | "children">;

export function NavLink<T extends string>({ children, href }: Props<T>) {
	return (
		<li>
			<ActiveLink href={href} activeClassName="text-emerald-500" className="underline">
				{children}
			</ActiveLink>
		</li>
	);
}
