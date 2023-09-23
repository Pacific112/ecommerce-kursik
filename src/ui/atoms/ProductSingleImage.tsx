import { type ImageDetails } from "@/ui/types/imageDetails";

type Props = {
	image: ImageDetails;
};

export const ProductSingleImage = ({ image }: Props) => {
	return <div className="flex items-center justify-center">
		<img src={image.src} alt={image.alt} />
	</div>;
};
