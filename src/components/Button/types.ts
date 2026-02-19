import type { TouchableOpacityProps } from "react-native";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
	base: "h-14 bg-neutral-800 rounded-2xl justify-center items-center",
	variants: {
		disabled: {
			true: "bg-neutral-400",
		},
		outline: {
			true: "bg-transparent border border-neutral-800",
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
}
