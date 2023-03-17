import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router/Router';
import './assets/styles/global.css';
import CurrentCityProvider from './providers/CurrentCityProvider';
import SidebarProvider from './providers/SidebarProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SidebarProvider>
			<CurrentCityProvider>
				<Router />
			</CurrentCityProvider>
		</SidebarProvider>
	</React.StrictMode>,
);
