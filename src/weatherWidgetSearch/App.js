import React, {useState} from 'react';
import WeatherWidget from './WeatherWidget';
import InputSection from './InputSection';

const cityNames = ['tartu', 'tallinn', 'pärnu'];
const App = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [name, setName] = useState('');

  const handleShowWidget = () => {
    setShowWidget(cityNames.includes(name.toLowerCase()));
  };

  return (
    <section className={'main'}>
      {showWidget ? <WeatherWidget name={name}/> :
      <InputSection onClick={handleShowWidget} name={name} setName={setName} /> }
    </section>
  );
};

export default App;
