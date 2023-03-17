import styles from '../WeatherCard/WeatherCard.module.css';
function FeelsLike({ weather }) {
	return (
		<div className={styles.feelsLike}>
			<span className={styles.InfoTitle}>Feels like</span>
			<span className={styles.InfoData}>{Math.round(weather.main.feels_like)}&#176;</span>
		</div>
	);
}

export default FeelsLike;
