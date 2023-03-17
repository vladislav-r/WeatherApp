import { useState, useEffect } from 'react';
import axios from 'axios';

export function useWeatherIcon(imgCode) {
	const [img, setImg] = useState();
	useEffect(() => {
		async function getImg() {
			const { data } = await axios.get(`https://openweathermap.org/img/wn/${imgCode}@2x.png`);
			setImg(data);
			console.log(data);
		}
		getImg();
	}, []);
	return img;
}
