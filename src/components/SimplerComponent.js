// Code SimplerComponentHere Here
import React from 'react';
//

// const handleClick = () {
//   console.log("you clicked!")
// }

const SimplerComponent = (props) => {
    return (
      <div onClick={props.handleClick}>
      I am just happy.
      </div>
    )
}

export default SimplerComponent;
