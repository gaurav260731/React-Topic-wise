import React from 'react';
const header = {
    color:'#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    fontFamily: "'Noto Sans JP', sans-serif"
  };
function Heading(props) {
    console.log(props.value);
    return (
        <div style={header}>
    <h1>{props.value}</h1>
  </div>)
}

export default Heading;