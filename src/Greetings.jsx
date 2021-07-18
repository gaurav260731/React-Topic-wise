import React from 'react';

const colorPurple = {
    color: 'purple'
}
function NoGreeting() {
    return(
      <span className="text-center" style={colorPurple}>No Greetings available</span>
    )
  }
  
  function Greetings() {
    return(
      <span className="text-center" style={colorPurple}>Welcome</span>
    )
  }

export {Greetings, NoGreeting};