import { observer } from "mobx-react";
import React from "react";
import { useMst } from "../../store-models";
import ComposeEmail from "./ComposeEmail";

function ComposeEmailContainer() {
	const { composeEmailList } = useMst().composeEmailList;

	return (
		<div className="absolute w-full h-full flex flex-row-reverse invisible top-0 left-0 z-10">
			{composeEmailList.map((compEmail, index) => (
				<ComposeEmail key={index} composeEmail={compEmail} />
			))}
		</div>
	);
}

export default observer(ComposeEmailContainer);
