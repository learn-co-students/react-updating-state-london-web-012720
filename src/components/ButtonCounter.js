//ButtonCounter 

import React from 'react';

class ButtonCounter extends React.Component {
    constructor() {
        super()
        //set initial state of count to 0
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                count: previousState + 1
            }
        })
    }

    // handleClick = () => {
    //     //when handleClick is called, newCount will increase this.state.count by 1. PRIOR to calling this.setState
    //     let newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     }) 
    // }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default ButtonCounter;