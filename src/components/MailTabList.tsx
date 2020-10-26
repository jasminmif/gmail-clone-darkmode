import clsx from "clsx";
import React from "react";
import { ACTIVE_COLOR } from "../utils/colors";

type TabProps = {
	active?: boolean;
	icon?: React.ReactNode;
	children: React.ReactNode;
};

export function Tab({ active, icon, children }: TabProps) {
	return (
		<div
			className={clsx(
				`flex-1 flex-col h-full items-center px-2 text-gray-200 hover:text-gray-100 justify-center font-semibold transition-colors duration-100 hover:bg-gray-400 cursor-pointer`,
				active && `text-${ACTIVE_COLOR}`
			)}
		>
			<div className="flex items-center h-full ml-2">
				<div className="mr-4 h-5 w-5">{icon}</div>
				<span>{children}</span>
			</div>
			{active && (
				<div
					className={`h-1 w-full border-t-4 rounded-t border-${ACTIVE_COLOR} relative`}
					style={{ top: "-4px" }}
				></div>
			)}
		</div>
	);
}

type MailTabListProps = {
	children: React.ReactNode;
};

export function MailTabList({ children }: MailTabListProps) {
	return (
		<div className="flex items-center justify-center text-center h-14 border-b border-gray-500">
			{children}
		</div>
	);
}
