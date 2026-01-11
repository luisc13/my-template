import { SafeAreaView } from "react-native-safe-area-context";

export default function Background({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SafeAreaView className="flex-1 p-5">{children}</SafeAreaView>;
}
