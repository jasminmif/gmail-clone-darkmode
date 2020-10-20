import React from "react";
import { SidebarCollapsedContextProvider } from './components/Sidebar/SidebarCollapsedContext';
import Home from './Home';

export default function App() {
	return (
		<SidebarCollapsedContextProvider>
			<Home />
		</SidebarCollapsedContextProvider>
	);
}
