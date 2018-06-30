// Code SimplerComponentHere Here
import React from 'react';

const thing = "I am just happy";

const SimplerComponent = (props) => {


  return (
    <div onClick={props.handleClick}>{thing}</div>
  )
}

export default SimplerComponent;
