import React from 'react';

const Box = ({ text }) => {
  const boxStyle = {
    border: '1px solid red',
    padding: '20px',
    margin: '10px 0',
    width: '100px',
    textAlign: 'center'
  };

  return (
    <div style={boxStyle}>
      <div>Box 1</div>
      <div>{text}</div>
    </div>
  );
};

export default Box;