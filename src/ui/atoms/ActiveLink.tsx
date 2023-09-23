"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { useMemo } from "react";

export type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	activeClassName: string;
	className: string;
	exact?: boolean;
};

export function ActiveLink<T extends string>({
	children,
	href,
	exact,
	activeClassName,
	className,
}: ActiveLinkProps<T>) {
	const pathname = usePathname();
	const isActive = useMemo(() => {
		if (exact || href === "/") {
			return pathname === href;
		}

		return pathname.startsWith(href);
	}, [pathname, href, exact]);

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
