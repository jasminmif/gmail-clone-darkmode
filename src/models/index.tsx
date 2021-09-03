import { Instance } from "mobx-state-tree";
import React, { createContext, useContext } from "react";
import { RootModel } from "./Root";

export const rootStore = RootModel.create({
	sidebar: {},
	composeEmailList: {composeEmailList: []}
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<RootStoreContext.Provider value={rootStore}>
			{children}
		</RootStoreContext.Provider>
	);
}

export function useMst() {
	const store = useContext(RootStoreContext);
	if (store === null) {
		throw new Error("Store cannot be null, please add a context provider");
	}
	return store;
}
