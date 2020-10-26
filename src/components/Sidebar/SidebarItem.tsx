import clsx from "clsx";
import React from "react";
import { useMst } from '../../models';
import { ACTIVE_COLOR, ACTIVE_TEXT_COLOR } from '../../utils/colors';

type Props = {
	text: string;
	active: boolean;
	children: React.ReactNode;
};

const EXPANDED_CSS =
	"flex border-r-1 rounded-r-full pl-6 transition duration-75 h-8 block py-1";
const COLLAPSED_CSS =
	"flex justify-center rounded-full inline margin-auto h-8 w-8";

const ACTIVE_CSS = `font-semibold text-${ACTIVE_TEXT_COLOR} bg-${ACTIVE_COLOR}`;
const INACTIVE_CSS = "text-gray-100 hover:bg-gray-400 ";

export default function SidebarItem({ text, active, children }: Props) {
	const { isCollapsed } = useMst().sidebar;

	return (
		<div
			className={clsx(
				"items-center transition duration-75 cursor-pointer",
				isCollapsed ? COLLAPSED_CSS : EXPANDED_CSS,
				active ? ACTIVE_CSS : INACTIVE_CSS
			)}
			style={{ margin: isCollapsed ? "auto" : "" }}
		>
			<div className={clsx(`h-5 w-5 inline`, !active && "text-gray-200")}>
				{children}
			</div>
			{!isCollapsed && <span className="ml-4">{text}</span>}
		</div>
	);
}
