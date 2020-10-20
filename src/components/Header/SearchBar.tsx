import React from "react";

export default function SearchBar() {
	return (
		<input
			type="text"
			className="w-full bg-gray-400 outline-none active:placeholder-white placeholder-gray-100"
			placeholder="Search mail"
		/>
	);
}
