import React from "react";
import Sidebar from "./Sidebar/Sidebar";

type Props = {
	children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div style={{ height: "calc(100vh - 64px)" }} className="flex">
			<div className="flex">
				<Sidebar />
			</div>
			<div className="flex-row w-full min-w-0">{children}</div>
		</div>
	);
}
