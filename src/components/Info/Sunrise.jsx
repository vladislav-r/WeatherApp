import React from 'react';
import styles from '../WeatherCard/WeatherCard.module.css';
function Sunrise({ weather }) {
	return (
		<div className={styles.sunrise}>
			<span className={styles.InfoTitle}>sunrise</span>
			<span className={styles.InfoData}>
				{new Date(weather.sys.sunrise * 1000).toLocaleTimeString('ru-RU')}
			</span>
		</div>
	);
}

export default Sunrise;
