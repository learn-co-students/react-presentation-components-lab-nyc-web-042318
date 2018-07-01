// Code SimpleComponentHere Here
import React from 'react';
class SimpleComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
       this.setState({
           mood: 'sad'
       })
      }
    

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        );
    }
}

export default SimpleComponent; 