import React from 'react';

function OperatorButton(props) {
  return (
    <button className="operator-button" onClick={() => props.onOperatorButtonClick(props.operator)}>
      {props.operator}
    </button>
  );
}

export default OperatorButton;
