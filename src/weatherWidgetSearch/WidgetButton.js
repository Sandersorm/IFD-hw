import React from 'react';

// eslint-disable-next-line react/prop-types
const WidgetButton = ({renderForm}) => {
  const buttonText = '+ Add Widget';

  return (
    <button
      className={'main'}
      onClick={renderForm}
      type={'button'}
    >
      {buttonText}
    </button>
  );
};


export default WidgetButton;
