import React from "react";
import { SidebarCollapsedContextProvider } from './components/Sidebar/SidebarCollapsedContext';
import Home from './Home';
import { Provider } from './models';

export default function App() {
	return (
		<Provider>
			<Home />
		</Provider>
	);
}
