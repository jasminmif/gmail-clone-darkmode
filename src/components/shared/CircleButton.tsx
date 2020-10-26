import React from "react";
import clsx from "clsx";

type Props = {
	padding?: number;
	children: React.ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function CircleButton({ padding = 2, children, className, ...props }: Props) {
	return (
		<button
			className={clsx(
				`hover:bg-gray-500 transition-colors duration-100 rounded-full outline-none active:outline-none focus:outline-none text-gray-100 hover:text-white`,
				padding ? `p-${padding}` : "p-2",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
