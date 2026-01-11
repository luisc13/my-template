import type { TouchableOpacityProps } from "react-native";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
	base: "h-16 bg-red-400 rounded-3xl justify-center items-center",
	variants: {
		disabled: {
			true: "bg-neutral400",
		},
		blankButton: {
			true: "bg-neutral100 border border-primaryDark800",
		},
		halfWidth: {
			true: "w-1/2",
			false: "w-full",
		},
	},
});

export interface ButtonComponentProps
	extends TouchableOpacityProps,
		VariantProps<typeof buttonVariants> {
	title: string;
	disabled?: boolean;
	isLoading?: boolean;
}
