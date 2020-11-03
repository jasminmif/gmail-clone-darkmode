import React from "react";
import Sidebar from "./Sidebar/Sidebar";

type Props = {
	children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div className="flex flex-row">
			<Sidebar />
			<div className="flex-1 w-full min-w-0">{children}</div>
		</div>
	);
}
