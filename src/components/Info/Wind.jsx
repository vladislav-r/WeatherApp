import React from 'react';
import styles from '../WeatherCard/WeatherCard.module.css';
function Wind({ weather }) {
	return (
		<div className={styles.humidity}>
			<span className={styles.InfoTitle}>Wind speed</span>
			<span className={styles.InfoData}>{weather.wind.speed.toFixed(1)} m/s</span>
		</div>
	);
}

export default Wind;
