import {
	Instance,
	SnapshotIn,
	TypeOrStateTreeNodeToStateTreeNode,
	types,
} from "mobx-state-tree";
import { destroy, getParent } from "mobx-state-tree";

export enum WINDOW_STATE {
	OPEN = "open",
	MINIMIZE = "minimize",
	MAXIMIZE = "maximize",
}

export const ComposeEmail = types
	.model({
		index: types.number,
		recipients: types.string,
		subject: types.string,
		content: types.string,
		windowState: types.optional(types.string, WINDOW_STATE.OPEN),
	})
	.actions((self) => ({
		setComposeEmail(
			index: number,
			recipients: string,
			subject: string,
			content: string,
			windowState?: string
		) {
			self.index = index;
			self.recipients = recipients;
			self.subject = subject;
			self.content = content;
			self.windowState = windowState ?? WINDOW_STATE.OPEN;
		},
		setSubject(subject: string) {
			self.subject = subject;
		},
		closeWindow() {
			getParent<typeof ComposeEmailList>(self, 2).remove(self);
		},
		setWindowState(windowState: WINDOW_STATE) {
			self.windowState = windowState;
		},
		maximizeWindowToggle() {
			self.windowState =
				self.windowState == WINDOW_STATE.MAXIMIZE
					? WINDOW_STATE.OPEN
					: WINDOW_STATE.MAXIMIZE;
		},
		minimizeWindowToggle() {
			self.windowState =
				self.windowState == WINDOW_STATE.MINIMIZE
					? WINDOW_STATE.OPEN
					: WINDOW_STATE.MINIMIZE;
		},
	}));

export const ComposeEmailList = types
	.model({
		composeEmailList: types.array(ComposeEmail),
	})
	.actions((self) => ({
		addComposeEmail(
			composeEmail:
				| SnapshotIn<typeof ComposeEmail>
				| Instance<typeof ComposeEmail>
		) {
			self.composeEmailList.push(composeEmail);
			this.updateIndexes();
		},
		updateIndexes() {
			self.composeEmailList.forEach((val, index) => (val.index = index));
		},
		remove(item: SnapshotIn<typeof ComposeEmail>) {
			destroy(item);
			this.updateIndexes();
		},
	}))
	.views((self) => ({
		get totalItems() {
			return self.composeEmailList.length;
		},
	}));
