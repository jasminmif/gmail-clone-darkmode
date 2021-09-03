import { Instance } from "mobx-state-tree";
import React, { ReactNode } from "react";
import { useMst } from "../../models";
import EmailInputs from "./EmailInputs";
import WindowIcon from "./WindowIcon";
import { ComposeEmail as ComposeEmailModel, WINDOW_STATE } from "../../models/ComposeEmail";
import { MinimizeIcon, MaximizeIcon, CloseIcon} from "../../utils/icons";
import { observer } from "mobx-react";

interface ComposeEmailProps {
	composeEmail: Instance<typeof ComposeEmailModel>;
}

const COMPOSE_WINDOW_WIDTH = 450;
const MINIMIZE_WINDOW_WIDTH = 300;

function getWidthByState(state: string) {
	// return state == WINDOW_STATE.MINIMIZE ? MINIMIZE_WINDOW_WIDTH : COMPOSE_WINDOW_WIDTH;
	return COMPOSE_WINDOW_WIDTH;
}

function rightPosCalc(state: string, index: number) {
	return index && (getWidthByState(state) + 5) * index;
}

function ComposeEmail({ composeEmail }: ComposeEmailProps) {
	return (
		<div
			className="absolute bottom-0 right-5 shadow-lg"
			style={{
				width: `${getWidthByState(composeEmail.windowState)}px`,
				right: `${rightPosCalc(composeEmail.windowState, composeEmail.index)}px`,
			}}
		>
			<div className="bg-gray-700 text-sm rounded-t-lg font-medium cursor-pointer flex items-center">
				<div className="text-white flex-1 py-3 px-4" onClick={composeEmail.minimizeWindowToggle}>
					{composeEmail.subject || 'New Message'}
				</div>
				<div className="text-gray-500 flex space-x-2 pr-2">
					<WindowIcon onClick={composeEmail.minimizeWindowToggle}>
						<MinimizeIcon/>
					</WindowIcon>
					{/* <WindowIcon onClick={composeEmail.maximizeWindowToggle}>
						<MaximizeIcon/>
					</WindowIcon> */}
					<WindowIcon onClick={composeEmail.closeWindow}>
						<CloseIcon/>
					</WindowIcon>
				</div>
			</div>
			{composeEmail.windowState != WINDOW_STATE.MINIMIZE && <div
				className="bg-gray-300 text-sm px-4 placeholder-text-gray-600 text-gray-800"
				style={{ height: "510px" }}
			>
				<div className="border-b border-gray-400">
					<EmailInputs
						placeholder="Recipients"
						defaultValue={composeEmail.recipients}
					/>
				</div>
				<div className="border-b border-gray-400">
					<EmailInputs placeholder="Subject" defaultValue={composeEmail.subject} onBlur={e => composeEmail.setSubject(e.target.value)} />
				</div>
				<div className="pt-2">
					<textarea
						className="w-full h-full outline-none bg-transparent placeholder-gray-400"
						rows={20}
						placeholder="Type email"
						defaultValue={composeEmail.content}
					></textarea>
				</div>
			</div>}
		</div>
	);
};

export default observer(ComposeEmail);
