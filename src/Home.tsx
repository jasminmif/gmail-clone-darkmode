import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

export default function Home() {
	function toggleSidebar(e: any) {
		console.log(e);
	}

	return (
		<div className="bg-gray-600 h-screen">
			<Header onSidebarToggle={toggleSidebar} />

			<Layout>test</Layout>
		</div>
	);
}
