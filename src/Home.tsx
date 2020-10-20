import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout";
import MailNavbar from './components/MailNavbar';
import {useSidebarCollapsedContext} from "./components/Sidebar/SidebarCollapsedContext";

export default function Home() {
	const {toggleSidebar} = useSidebarCollapsedContext();

	return (
		<div className="bg-gray-600 h-screen">
			<Header onSidebarToggle={() => toggleSidebar() } />
			<Layout>
				<MailNavbar/>
			</Layout>
		</div>
	);
}
