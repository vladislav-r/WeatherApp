import { createContext, useState } from 'react';

export const CurrentCityContext = createContext();

function CurrentCityProvider({ children }) {
	const [currentCity, setCurrentCity] = useState('хабаровск');
	return (
		<CurrentCityContext.Provider value={{ currentCity, setCurrentCity }}>
			{children}
		</CurrentCityContext.Provider>
	);
}

export default CurrentCityProvider;
