import { types } from "mobx-state-tree";
import { ComposeEmailList } from "./ComposeEmail";
import { Sidebar } from "./Sidebar";

export const RootModel = types.model({
	sidebar: Sidebar,
	composeEmailList: ComposeEmailList
});