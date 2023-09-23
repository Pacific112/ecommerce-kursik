import { ActiveLink, type ActiveLinkProps } from "@/ui/atoms/ActiveLink";

type Props<T extends string> = Pick<ActiveLinkProps<T>, "href" | "children">;

export function NavLink<T extends string>({ children, href }: Props<T>) {
	return (
		<li>
			<ActiveLink href={href} exact activeClassName="text-green-500" className="underline">
				{children}
			</ActiveLink>
		</li>
	);
}
