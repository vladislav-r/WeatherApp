import styles from './InfoBlock.module.css';

import Sunrise from '../Info/Sunrise';
import Sunset from '../Info/Sunset';
import Humidity from '../Info/Humidity';
import FeelsLike from '../Info/FeelsLike';
import Wind from '../Info/Wind';
import Clouds from '../Info/Clouds';

function InfoBlock({ weather }) {
	return (
		<div className={styles.infoBlock}>
			<Sunrise weather={weather} />
			<Sunset weather={weather} />
			<FeelsLike weather={weather} />
			<Humidity weather={weather} />
			<Wind weather={weather} />
			<Clouds weather={weather} />
		</div>
	);
}

export default InfoBlock;
