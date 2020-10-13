import React from "react";
import Sidebar from "./Sidebar";

type Props = {
	children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div style={{ height: "calc(100vh - 64px)" }} className="flex">
			<Sidebar />
			<div>{children}</div>
		</div>
	);
}
