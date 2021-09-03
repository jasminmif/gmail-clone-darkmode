import React, { useEffect, useState } from "react";
import { BookmarkIcon, CheckboxIcon, StarIcon } from "../../utils/icons";
import CircleButton from "../shared/CircleButton";

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
					<CircleButton className={textColor}>
						<CheckboxIcon />
					</CircleButton>
					<CircleButton className={textColor}>
						<StarIcon />
					</CircleButton>
					<CircleButton className={textColor}>
						<BookmarkIcon />
					</CircleButton>
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
					<div className="text-xs whitespace-no-wrap">
						<CircleButton>
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
								<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
							</svg>
						</CircleButton>
						<CircleButton>
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</CircleButton>
						<CircleButton>
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
									clipRule="evenodd"
								/>
							</svg>
						</CircleButton>
						<CircleButton>
							<svg
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
									clipRule="evenodd"
								></path>
							</svg>
						</CircleButton>
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
