import React from 'react';

const Button = (props) => (
    <button
      type="button" onClick={() => { props.click(props.number) }}>
      {props.number}
    </button>
  );

  export default Button;