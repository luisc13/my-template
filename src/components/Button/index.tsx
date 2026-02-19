import { Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";
import { type ButtonComponentProps, buttonVariants } from "./types";

export default function ButtonComponent({
	title,
	disabled = false,
	onPress,
	outline,
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
					outline,
					halfWidth,
				}),
			)}
			disabled={disabled}
		>
			<Text className="text-lg font-bold text-white">{title}</Text>
		</TouchableOpacity>
	);
}
