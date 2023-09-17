import { type ImageDetails } from "@/ui/types/imageDetails";

type Props = {
	image: ImageDetails;
};

export const ProductListItemImage = ({ image: { src, alt } }: Props) => (
	<div className="aspect-square h-32 w-32 overflow-hidden rounded-md">
		<img width={128} height={128} alt={alt} src={src} className="object-contain object-center" />
	</div>
);
