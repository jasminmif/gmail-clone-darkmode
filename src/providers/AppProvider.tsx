import React from "react";
import { RootStoreProvider } from "../store-models/index";

interface AppProviderProps {
	children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
	return <RootStoreProvider>{children}</RootStoreProvider>;
}
