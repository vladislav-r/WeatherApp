import React from 'react';
import styles from '../WeatherCard/WeatherCard.module.css';
function Sunset({ weather }) {
	return (
		<div className={styles.sunset}>
			<span className={styles.InfoTitle}>sunset</span>
			<span className={styles.InfoData}>
				{new Date(weather.sys.sunset * 1000).toLocaleTimeString('ru-RU')}
			</span>
		</div>
	);
}

export default Sunset;
