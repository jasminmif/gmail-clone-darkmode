import { types } from "mobx-state-tree";

export const Sidebar = types
	.model({
		isCollapsed: false,
	})
	.actions((self) => ({
		setIsCollapsed(isCollapsed: boolean) {
			self.isCollapsed = isCollapsed;
		},
		toggleIsCollapsed() {
			self.isCollapsed = !self.isCollapsed
		}
	}));
