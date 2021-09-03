import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import { useMst } from "../../models";

export default function ComposeBtn({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
	const { isCollapsed } = useMst().sidebar;

	return (
		<button
			{...props}
			className={clsx(
				`shadow-sm rounded-full flex items-center bg-gray-400 hover:bg-gray-300 transition duration-300 text-white hover:text-gray-600 font-semibold focus:outline-none hover:shadow-lg leading-3 text-sm`,
				isCollapsed ? "p-3 h-14" : "px-2 py-2 h-12"
			)}
		>
			<img
				className={clsx(`inline-block`, !isCollapsed && "p-2")}
				src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
				alt="cros"
			/>
			{!isCollapsed && (
				<span className="pr-4 tracking-wide">Compose</span>
			)}
		</button>
	);
}
