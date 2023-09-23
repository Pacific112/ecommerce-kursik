import { type Money } from "@/ui/types/money";
import { type ImageDetails } from "@/ui/types/imageDetails";

export type Product = {
	id: string;
	name: string;
	description: string;
	price: Money;
	thumbnail: ImageDetails;
};