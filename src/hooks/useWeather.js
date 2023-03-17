import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CurrentCityContext } from '../providers/CurrentCityProvider';

export const useWeather = (LANG, CITY) => {
	const { currentCity } = useContext(CurrentCityContext);

	const [weather, setWeather] = useState();

	useEffect(() => {
		async function getCurrentWeather() {
			const API_KEY = '9085d64b91b5751ac3ade7509d174700';
			// prettier-ignore
			const {data} = await axios
				.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&lang=${LANG}&appid=${API_KEY}&units=metric`,)
			setWeather(data);
		}
		getCurrentWeather();
		console.log('Запрос на погоду');
	}, [currentCity]);

	return weather;
};
