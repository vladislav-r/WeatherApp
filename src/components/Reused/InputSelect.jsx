import Select, { createFilter } from 'react-select';
import { useContext } from 'react';
import { CurrentCityContext } from '../../providers/CurrentCityProvider';
import useCities from '../../hooks/useCities';

function InputSelect() {
	const { currentCity, setCurrentCity } = useContext(CurrentCityContext);

	const cities = useCities(); // загрузка городов в сайдбаре

	//two functions to update value of input cities
	const getValue = () => {
		return currentCity ? cities.find(c => c.value.toLowerCase() === currentCity.toLowerCase()) : '';
	};
	const onChange = newValue => {
		setCurrentCity(newValue.value);
	};

	const customStyles = {
		option: (defaultStyles, state) => ({
			...defaultStyles,
			color: state.isSelected ? '#fff' : '#000',
		}),
	};
	return (
		<Select
			cacheOptions
			filterOption={createFilter({ ignoreAccents: false })}
			onChange={onChange}
			value={getValue()}
			isSearchable={true}
			loadingMessage={'Загрузка данных...'}
			options={cities}
			label='Город'
			styles={customStyles}
		/>
	);
}

export default InputSelect;
