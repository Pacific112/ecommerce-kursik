"use client"

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
	href: string;
	children: React.ReactNode;
	activeClassName: string;
	className: string;
};

export const ActiveLink = ({ children, href, activeClassName, className }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			aria-current={isActive}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
};
