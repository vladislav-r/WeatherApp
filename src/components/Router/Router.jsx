import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherCard from '../WeatherCard/WeatherCard';
import NextDays from '../../screens/NextDays/NextDays';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WeatherCard />} path='/' />
				<Route element={<NextDays />} path='/nextdays' />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
