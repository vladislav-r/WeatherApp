import { useState, useEffect, useMemo } from 'react';
import citiesList from '../assets/cities/test.json';

function useCities() {
	const [cities, setCities] = useState([]);

	// prettier-ignore
	const options = useMemo(() => citiesList.map(city => ({
				label: city.city,
				value: city.city,
		})), [citiesList])

	useEffect(() => {
		setCities(options);
	}, []);

	return cities;
}

export default useCities;
