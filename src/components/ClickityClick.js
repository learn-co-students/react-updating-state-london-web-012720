// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super()

        // define the initial state
        this.state = {
            hasBeenClicked: false,
        }
    };
    
    handleClick = () => {
        //Update the state
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>{this.state.hasBeenClicked ? true : false}Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;