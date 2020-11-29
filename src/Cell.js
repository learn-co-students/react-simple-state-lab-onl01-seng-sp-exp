import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super() 
    this.state = {
      color: props.value
    }   
  }

  changeToGray = () => {
    this.setState({
      color: this.state.color = "#333"
    })
  }



  
  render() {
    return (
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}}
        onClick={this.changeToGray}>
      </div>
    )
  }
  
}