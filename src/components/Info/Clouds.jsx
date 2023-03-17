import styles from '../WeatherCard/WeatherCard.module.css';

function Clouds({ weather }) {
	return (
		<div className={styles.feelsLike}>
			<span className={styles.InfoTitle}>Clouds</span>
			<span className={styles.InfoData}>{Math.round(weather.clouds.all)}%</span>
		</div>
	);
}

export default Clouds;
