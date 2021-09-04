import React, { ReactNode, useRef, useState } from "react";
import clsx from "clsx";

interface Props {}

interface TooltipProp {
	children: ReactNode;
	text?: string;
	htmlText?: string;
	position?: "bottom" | "bottom-left";
}

enum POSITIONS {
	BOTTOM = "bottom",
	BOTTOM_LEFT = "bottom-left",
}

export default function Tooltip({
	children,
	text,
	htmlText = "",
	position = "bottom",
}: TooltipProp) {
	const [isMouseIn, setIsMouseIn] = useState(false);

	const handleIsMouseIn = () => {
		setIsMouseIn(true);
	};

	const handleMouseOut = () => {
		setIsMouseIn(false);
	};

	const options = {
		className: clsx(
			`absolute bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-xs font-semibold tracking-wide whitespace-no-wrap mt-2 bg-opacity-75 transition-opacity delay-200 duration-300 opacity-0 cursor-default`,
			isMouseIn && `opacity-100 visible`,
			!isMouseIn && `invisible`
		),
	};

	return (
		<div className={clsx("flex flex-col")}>
			<div onMouseEnter={handleIsMouseIn} onMouseLeave={handleMouseOut}>
				{children}
			</div>
			<div
				className={clsx(
					"relative",
					position == POSITIONS.BOTTOM_LEFT && "flex justify-end"
				)}
			>
				{text ? (
					<div {...options}>{text}</div>
				) : (
					<div
						{...options}
						dangerouslySetInnerHTML={{ __html: htmlText }}
					></div>
				)}
			</div>
		</div>
	);
}
