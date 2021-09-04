import React from "react";
import {
	KeyboardIcon,
	RefreshIcon,
	SelectCheckboxIcon,
	ThreeDotsIcon,
} from "../utils/icons";
import CircleButton from "./shared/CircleButton";
import Tooltip from "./shared/Tooltip";

export default function MailNavbar() {
	return (
		<div className="flex items-center justify-between h-12 px-2 border-b border-gray-500">
			<div className="flex space-x-4">
				<div>
					<Tooltip text="Select">
						<CircleButton>
							<SelectCheckboxIcon />
						</CircleButton>
					</Tooltip>
				</div>
				<div>
					<Tooltip text="Refresh">
						<CircleButton>
							<RefreshIcon />
						</CircleButton>
					</Tooltip>
				</div>
				<div>
					<Tooltip text="More">
						<CircleButton>
							<ThreeDotsIcon />
						</CircleButton>
					</Tooltip>
				</div>
			</div>

			<div className="flex space-x-4">
				<div className="flex items-center">
					<CircleButton className="leading-3">
						<span className="text-xs px-2">1-500 of 5,000</span>
					</CircleButton>
				</div>
				<div className="flex space-x-2">
					<div>
						<Tooltip text="Newer">
							<CircleButton>
								<svg
									className="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</CircleButton>
						</Tooltip>
					</div>
					<div>
						<Tooltip text="Older">
							<CircleButton>
								<svg
									className="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</CircleButton>
						</Tooltip>
					</div>
				</div>
				<div>
					<Tooltip text="Input tools on/off" position="bottom-left">
						<CircleButton>
							<KeyboardIcon />
						</CircleButton>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
