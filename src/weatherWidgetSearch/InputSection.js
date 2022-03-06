import React, {useState} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import '../../css/index.css';

const InputSection = ({onClick, name, setName}) => {
  const errorMessage = 'City name is too big';

  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length > 19) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div>
      <div className={'inputButton'}>
        <input
          onChange={handleInputChange}
          type="text"
          value={name}
        />
        <Button name={name} onClick={onClick}/>
      </div>
      <b className={'main'}>{error ? errorMessage : ''}</b>
    </div>
  );
};

InputSection.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
};

export default InputSection;
