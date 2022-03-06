import ReactDOM from 'react-dom';
import '../css/index.css';
import WeatherWidgetSearch from './weatherWidgetSearch/App';
import React from 'react';

const currentApp = <WeatherWidgetSearch/>;

ReactDOM.render(currentApp, document.getElementById('root'));
