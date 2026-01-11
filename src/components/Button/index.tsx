import { Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";
import { type ButtonComponentProps, buttonVariants } from "./types";

export default function ButtonComponent({
	title,
	disabled = false,
	onPress,
	blankButton,
	className,
	halfWidth,
}: ButtonComponentProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={twMerge(
				buttonVariants({
					disabled,
					className,
					blankButton,
					halfWidth,
				}),
			)}
			disabled={disabled}
		>
			<Text className="text-lg font-bold color-white">{title}</Text>
		</TouchableOpacity>
	);
}
