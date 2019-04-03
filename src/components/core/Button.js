import React from "react";
class Button extends React.Component{
  render(){
    return(
      
        <button id="button-addon2" className={`btn  ${this.props.isSlected ? 'btn-success':'btn-outline-success'  }`}
                
          onClick={this.props.onClick}>
          {this.props.children}
        </button>
     
    )
  }
}
export default Button;