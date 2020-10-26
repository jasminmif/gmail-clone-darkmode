import { types } from "mobx-state-tree";
import { Sidebar } from "./Sidebar";

export const RootModel = types.model({
	sidebar: Sidebar,
});