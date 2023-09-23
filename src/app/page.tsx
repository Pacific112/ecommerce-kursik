import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center p-24">
			<h1 className="text-3xl font-bold">Welcome to my shop!</h1>
			<Link
				href={"/products"}
				className="mt-4 w-full max-w-xl rounded-lg bg-emerald-500 py-2 text-center font-bold text-white"
			>
				Search for headphones!
			</Link>
		</main>
	);
}
