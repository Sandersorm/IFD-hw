import React, {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import WeatherWidget from './WeatherWidget';
import InputSection from './InputSection';
import WidgetButton from './WidgetButton';

const cityNames = ['tartu', 'tallinn', 'pärnu'];
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [showWidget, setShowWidget] = useState(false);
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleShowWidget = () => {
    setShowWidget(cityNames.includes(name.toLowerCase()));
  };

  const renderForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <WidgetButton renderForm={renderForm}/>
      <section focu>
        {showForm && <InputSection onClick={handleShowWidget} name={name} setName={setName}> </InputSection>}
      </section>
    </div>
  );
};

export default App;
