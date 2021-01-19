import React, { useEffect, useState } from "react";

type EmailListProps = {
	children: React.ReactNode;
};
export function EmailList({ children }: EmailListProps) {
	return <div className="flex-row">{children}</div>;
}
