"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	activeClassName: string;
	className: string;
};

export function ActiveLink<T extends string>({
	children,
	href,
	activeClassName,
	className,
}: ActiveLinkProps<T>) {
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
}
