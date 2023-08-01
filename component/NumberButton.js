import React from 'react';

function NumberButton(props) {
  return (
    <button className="number-button" onClick={() => props.onNumberButtonClick(props.number)}>
      {props.number}
    </button>
  );
}

export default NumberButton;
