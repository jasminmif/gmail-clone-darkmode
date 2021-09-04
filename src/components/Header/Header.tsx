import React from "react";
import SearchBarInput from "./SearchBarInput";
import CircleButton from "../shared/CircleButton";
import { useMst } from "../../models";
import { observer } from "mobx-react";
import Tooltip from "../shared/Tooltip";
import {
	DownArrowIcon,
	GoogleAppsIcon,
	QuestionIcon,
	SearchIcon,
	SettingsIcon,
} from "../../utils/icons";

export default function Header() {
	const { toggleIsCollapsed } = useMst().sidebar;

	function onToggle() {
		toggleIsCollapsed();
	}

	return (
		<div className="w-full h-16 flex items-center text-white border-b border-gray-500">
			<div className="flex">
				<div className="w-64 flex pl-2">
					<Tooltip text="Main menu">
						<CircleButton padding={4} onClick={onToggle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</CircleButton>
					</Tooltip>
					<div className="flex items-center m-1">
						<img
							src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
							alt="google img"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-between w-full items-center pr-2">
				<div className="bg-gray-400 rounded-md w-2/3 p-1 flex items-center space-x-2">
					<div className="pl-1">
						<Tooltip text="Search">
							<CircleButton>
								<SearchIcon />
							</CircleButton>
						</Tooltip>
					</div>
					<div className="flex-1">
						<SearchBarInput />
					</div>

					<div>
						<Tooltip text="Show search options">
							<CircleButton>
								<DownArrowIcon />
							</CircleButton>
						</Tooltip>
					</div>
				</div>

				<div className="space-x-2 flex items-center">
					<Tooltip text="Support">
						<CircleButton>
							<QuestionIcon />
						</CircleButton>
					</Tooltip>
					<Tooltip text="Settings">
						<CircleButton>
							<SettingsIcon />
						</CircleButton>
					</Tooltip>
					<Tooltip text="Google Apps" position="bottom-left">
						<CircleButton>
							<GoogleAppsIcon />
						</CircleButton>
					</Tooltip>

					<Tooltip
						htmlText="<strong>Google Account</strong><br/>Jasmin Miftari<br/>jasmin.mif@gmail.com"
						position="bottom-left"
					>
						<CircleButton padding={1}>
							<div className="h-8 w-8 rounded-full flex justify-center items-center bg-green-400 font-semibold uppercase">
								J
							</div>
						</CircleButton>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
