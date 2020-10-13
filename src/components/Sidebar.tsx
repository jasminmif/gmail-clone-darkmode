import React from "react";

export default function Sidebar() {
	return (
		<div className="flex-row w-80">
			<div className="flex mt-4">
				<button className="shadow-sm px-4 py-2 ml-2 rounded-full flex items-center bg-gray-400 hover:bg-gray-300 transition-colors duration-300 text-white hover:text-gray-600 focus:outline-none hover:shadow-lg leading-3 text-sm">
					<img
						className="inline-block mr-2"
						src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
						alt="cros"
					/>
					<span className="pr-2 tracking-wide">Compose</span>
				</button>
			</div>

			<div>Jasmin</div>
		</div>
	);
}
