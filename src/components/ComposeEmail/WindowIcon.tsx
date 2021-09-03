import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface WindowIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export default function WindowIcon({ children, ...props }: WindowIconProps) {
	return (
		<button
			className="hover:text-white transition-colors duration-100 hover:bg-gray-500 p-1 outline-none focus:outline-none"
			{...props}
		>
			{children}
		</button>
	);
}
