import { NavLink } from "@/ui/atoms/NavLink";

export const NavHeader = () => {
	return (
		<nav className="w-full bg-white py-4 shadow-lg">
			<ul className="mx-auto flex flex-row justify-center gap-4">
				<NavLink href={"/"}>Home</NavLink>
				<NavLink href={"/products"}>Products</NavLink>
			</ul>
		</nav>
	);
};
