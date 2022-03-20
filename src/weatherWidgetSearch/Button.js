import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name, onClick}) => {
  const buttonText = 'Show weather';

  return (
    <button
      disabled={!name || name.length > 19}
      onSubmit={console.log('jou')}
      className={!name || name.length > 19 ? 'disabledButton' : 'activeButton'}
      type={'submit'}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
