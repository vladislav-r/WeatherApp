import styles from '../WeatherCard/WeatherCard.module.css';
function Humidity({ weather }) {
	return (
		<div className={styles.humidity}>
			<span className={styles.InfoTitle}>Humidity</span>
			<span className={styles.InfoData}>{weather.main.humidity}%</span>
		</div>
	);
}

export default Humidity;
