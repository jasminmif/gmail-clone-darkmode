import React, { useEffect, useState } from "react";
import CircleButton from "./shared/CircleButton";

export function EmailRow() {
	const [isHover, setIsHover] = useState(false);

	let textColor = isHover ? 'text-gray-200' : 'text-gray-400';
	textColor += ' hover:text-white';
	
	return (
		<div
			className="flex justify-between items-center px-2 border-b border-gray-500 h-10 text-white hover:shadow-md"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className="flex items-center h-full min-w-0">
				<div className="flex items-center h-full">
					<CircleButton className={textColor}>
						<svg
							className="h-5 w-5"
							viewBox="-2 -2 27 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
								fill="currentColor"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
								fill="currentColor"
							/>
						</svg>
					</CircleButton>
					<CircleButton className={textColor}>
						<svg
							className="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
					</CircleButton>
					<CircleButton className={textColor}>
						<svg
							className="h-5 w-5"
							viewBox="3 3 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z"
								fill="currentColor"
							/>
						</svg>
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
								<path
									fillRule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
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

type EmailListProps = {
	children: React.ReactNode;
};
export function EmailList({ children }: EmailListProps) {
	return <div className="flex-row">{children}</div>;
}
