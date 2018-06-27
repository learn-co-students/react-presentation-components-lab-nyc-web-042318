// Code SimplerComponentHere Here
import React from 'react';

const SimpleComponent = (props) => {
  let message = 'I am just happy'

  function handleClick() {
    message = 'I am tired'
  }

  return (
    <div onClick={props.handleClick}>
      {message}
    </div>
  )
}

export default SimpleComponent
