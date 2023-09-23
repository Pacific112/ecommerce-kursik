type Props = {
	params: {
		productId: string;
	};
};

const SingleProductPage = ({ params }: Props) => {
	const { productId } = params;

	return (
		<main className="flex min-h-screen w-full justify-center p-16">
			<h1 className="text-3xl font-bold">Product {productId}</h1>
		</main>
	);
};

export default SingleProductPage;
