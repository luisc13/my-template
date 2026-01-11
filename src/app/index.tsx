import Background from "../components/Background";
import ButtonComponent from "../components/Button";

export default function Onboarding() {
	return (
		<Background>
			<ButtonComponent
				className="shadow-black self-center mt-auto mb-20 w-[70%]"
				title="Começar"
			/>
		</Background>
	);
}
