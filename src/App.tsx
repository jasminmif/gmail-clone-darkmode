import React from "react";
import Home from "./page/Home";
import { RootStoreProvider } from "./store-models";

export default function App() {
	return (
		<RootStoreProvider>
			<Home />
		</RootStoreProvider>
	);
}
