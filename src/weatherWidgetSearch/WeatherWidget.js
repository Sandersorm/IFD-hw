import React, {useState} from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = ({name}) => {
  const [tempValue, setTempValue] = useState(0);
  const [windValue, setWindValue] = useState(0);
  const [precipitationValue, setPrecipitationValue] = useState('');

  const weatherIcons = ['☀️', '⛅', '☁️', '🌩️', '🌧️', '🌦️', '🌨️'];

  const getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const generateWeather = () => {
    const precipitationIndex = getRandomArbitrary(0, weatherIcons.length - 1);

    setTempValue(getRandomArbitrary(-20, 30));
    setWindValue(getRandomArbitrary(0, 10));
    setPrecipitationValue(weatherIcons[precipitationIndex]);
  };
  return (
    <div>
      <div className='header'>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <button id="generate" className='generateButton' onClick={generateWeather}>Generate</button>
      </div>
      <div className='content'>
        <div className='row'>
          <strong>Temperature:</strong>
          <span> {tempValue} </span>
        </div>
        <div className='row'>
          <strong>Precipitation:</strong>
          <span> {precipitationValue} </span>
        </div>
        <div className='row'>
          <strong>Wind:</strong>
          <span> {windValue} </span>
        </div>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WeatherWidget;
