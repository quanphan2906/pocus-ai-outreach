import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

interface InputFieldProps {
	label: string;
	description: string;
	placeholder: string;
}

export default function InputField({
	label,
	description,
	placeholder,
}: InputFieldProps) {
	return (
		<div className="w-full border rounded-lg flex flex-row">
			<Label
				htmlFor="trigger-description"
				className="text-base font-semibold p-4 w-1/6 text-center border-r"
			>
				{label}
			</Label>
			<Input
				id="trigger-description"
				className="resize-none p-4 h-full border-none shadow-none focus-visible:ring-0 text-base"
				placeholder={placeholder}
				disabled
			/>
		</div>
	);
}
