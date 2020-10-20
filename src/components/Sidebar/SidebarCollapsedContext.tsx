import React, { useContext, createContext, useState, useCallback } from 'react';

type SidebarCollapsedType = {
	isCollapsed: boolean,
	setIsCollapsed: (active: boolean) => void,
	toggleSidebar: () => void
}

export const SidebarCollapsedContext = createContext<SidebarCollapsedType>({
	isCollapsed: false,
	setIsCollapsed: () => null,
	toggleSidebar: () => null
});

export function SidebarCollapsedVale(): SidebarCollapsedType {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const toggleSidebar = useCallback(() => {
		setIsCollapsed((state) => !state);
	}, [isCollapsed])
	
    return {
		isCollapsed,
		setIsCollapsed,
		toggleSidebar
	};
}

export function useSidebarCollapsedContext() {
	return useContext(SidebarCollapsedContext);
}

type Props = {
	children: React.ReactNode
}

export function SidebarCollapsedContextProvider({ children }: Props) {
	const state = SidebarCollapsedVale();

	return (
		<SidebarCollapsedContext.Provider value={state}>
			{children}
		</SidebarCollapsedContext.Provider>
	)
}