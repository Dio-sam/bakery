import React from "react";
class Input extends React.Component{
  render() {
    return(
      <input 
        type="text"
        value={this.props.inputText} 
        onChange={(evt)=>{this.props.onChange(evt.target.value)}}
      />
    );
  }

}
export default Input;