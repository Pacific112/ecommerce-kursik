import { type Money } from "@/ui/types/money";

export const formatPrice = (price: Money) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: price.currency,
	});
	return formatter.format(price.cents / 100);
};
