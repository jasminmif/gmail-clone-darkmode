import { observer } from "mobx-react";
import React from "react";
import { useMst } from "../../models";
import ComposeEmail from "./ComposeEmail";

function ComposeEmailContainer() {
	const { composeEmailList } = useMst().composeEmailList;
	
	return (
		<div>
			{composeEmailList.map((compEmail, index) => (
				<ComposeEmail key={index} composeEmail={compEmail} />
			))}
		</div>
	);
}

export default observer(ComposeEmailContainer);
