import React from 'react'

export default class ClickityClick extends React.Component{

  constructor(){
    super()
    this.state = {

      hasBeedClicked: false
    }
  }


  handleClick = (e) =>{

    this.setState({
      hasBeedClicked: true
    }, () => console.log(this.state.hasBeedClicked))


  }



  render(){
    return(
        <div>
          <p>I have {this.state.hasBeedClicked ? null : 'not'} been clicked!</p>
          <button  onClick={this.handleClick}  >Click me!</button>
        </div>
    )
  }
}
