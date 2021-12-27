import React, { useEffect, useState } from "react";
import {
	ArchiveIcon,
	BookmarkIcon,
	CheckboxIcon,
	ClockIcon,
	ReadMailIcon,
	StarIcon,
	TrashcanIcon,
} from "../../utils/icons";
import CircleButton from "../../shared/CircleButton";
import Tooltip from "../../shared/Tooltip";

export function EmailRow() {
	const [isHover, setIsHover] = useState(false);

	let textColor = isHover ? "text-gray-200" : "text-gray-400";
	textColor += " hover:text-white";

	return (
		<div
			className="flex justify-between items-center px-2 border-b border-gray-500 h-10 text-white hover:shadow-md"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className="flex items-center h-full min-w-0 text-sm">
				<div className="flex items-center h-full">
					<Tooltip text="Select">
						<CircleButton className={textColor}>
							<CheckboxIcon />
						</CircleButton>
					</Tooltip>
					<Tooltip text="Not starred">
						<CircleButton className={textColor}>
							<StarIcon />
						</CircleButton>
					</Tooltip>
					<Tooltip text="Important">
						<CircleButton className={textColor}>
							<BookmarkIcon />
						</CircleButton>
					</Tooltip>
				</div>
				<div className="flex-shrink-0 w-52">Jasmin Miftari</div>
				<div className="pr-4 truncate">
					Request for website development - Lorem ipsum dolor sit,
					amet consectetur adipisicing elit. Eaque non nesciunt
					voluptate inventore est! Aut asperiores dolorem porro
					pariatur in itaque, dolore ullam. Animi aperiam labore
					veniam, voluptatibus qui id!
				</div>
			</div>
			<div className="flex pr-2">
				{isHover ? (
					<div className="text-xs flex">
						<Tooltip text="Archive" position="bottom-left">
							<CircleButton>
								<ArchiveIcon />
							</CircleButton>
						</Tooltip>

						<Tooltip text="Remove" position="bottom-left">
							<CircleButton>
								<TrashcanIcon />
							</CircleButton>
						</Tooltip>

						<Tooltip text="Mark as read" position="bottom-left">
							<CircleButton>
								<ReadMailIcon />
							</CircleButton>
						</Tooltip>

						<Tooltip text="Snooze" position="bottom-left">
							<CircleButton>
								<ClockIcon />
							</CircleButton>
						</Tooltip>
					</div>
				) : (
					<div className="pr-2 text-xs whitespace-no-wrap">
						Oct 22
					</div>
				)}
			</div>
		</div>
	);
}
