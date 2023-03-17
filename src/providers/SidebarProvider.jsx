import { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
	const [isSidebar, setSidebar] = useState(false);

	return (
		//prettier-ignore
		<SidebarContext.Provider value={{isSidebar, setSidebar}}>
      {children}
    </SidebarContext.Provider>
	);
};

export default SidebarProvider;
