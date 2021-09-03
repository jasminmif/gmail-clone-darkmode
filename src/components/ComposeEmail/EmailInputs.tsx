import React, { ReactNode, InputHTMLAttributes } from "react";

interface EmailInputsProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
} 

export default function EmailInputs({ placeholder, ...props }: EmailInputsProps) {
	return (
		<input
			className="outline-none bg-transparent h-8 w-full"
			type="text"
			placeholder={placeholder}
			{...props}
		/>
	);
}