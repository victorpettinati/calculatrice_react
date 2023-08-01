import React from 'react';

function EqualButton(props) {
  return (
    <button className="equal-button" onClick={props.onEqualButtonClick}>
      =
    </button>
  );
}

export default EqualButton;
