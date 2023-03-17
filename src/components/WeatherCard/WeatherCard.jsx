import { useContext } from 'react';
import { useWeather } from '../../hooks/useWeather';

import Sidebar from '../Sidebar/Sidebar';
import NextArrow from '../Reused/NextArrow';
import SettingsIcon from '../Reused/SettingsIcon';
import styles from './WeatherCard.module.css';
import { SidebarContext } from '../../providers/SidebarProvider';
import { CurrentCityContext } from '../../providers/CurrentCityProvider';
import { Link } from 'react-router-dom';
import InfoBlock from '../InfoBlock/InfoBlock';

function WeatherCard() {
	const { isSidebar, setSidebar } = useContext(SidebarContext);
	const { currentCity, setCurrentCity } = useContext(CurrentCityContext);

	const weather = useWeather('ru', currentCity);

	if (!weather)
		return (
			<div className={styles.card}>
				<h2>Загрузка...</h2>
			</div>
		);

	return (
		<>
			<div className={styles.card}>
				<div className={styles.header}>
					<div className='container'>
						<div className={styles.headerInner}>
							<div className={styles.headerLeft}>
								<p className={styles.city}>{weather.name}</p>
								<p className={styles.hello}>Добрый день</p>
							</div>
							<div className={styles.headerRight}>
								<SettingsIcon w={30} h={30} />
								{isSidebar && <Sidebar />}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className='container'>
						<div className={styles.main}>
							<div className={styles.img}></div>
							<div className={styles.temp}>
								<div className={styles.mainCurrentTempDiv}>
									<span className={styles.mainCurrentTemp}>
										{Math.round(weather.main.temp)}&#176;
									</span>
									<span className={styles.EdinIzmer}>C</span>
								</div>
								<span className={styles.mainWeatherType}>{weather.weather[0].description}</span>
								<div className={styles.mainDateInfo}>
									<span>Friday, 16</span>
									<span> &#8226; </span>
									<span>19:52</span>
								</div>
							</div>
							<div className={styles.LinkNextDaysDiv}>
								<Link to={'/nextdays'} className={styles.LinkNextDays}>
									<span>На неделю</span>
									<NextArrow w={22} h={22} />
								</Link>
							</div>
							<InfoBlock weather={weather} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WeatherCard;
