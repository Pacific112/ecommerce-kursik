import { ActiveLink } from "@/ui/atoms/ActiveLink";

type Props = {
	href: string;
	children: React.ReactNode;
};

export const NavLink = ({ children, href }: Props) => {
	return (
		<li>
			<ActiveLink href={href} activeClassName="text-green-500" className="underline">
				{children}
			</ActiveLink>
		</li>
	);
};
