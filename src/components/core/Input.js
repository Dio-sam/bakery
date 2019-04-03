import React from "react";
class Input extends React.Component{
  render() {
    return(
      
      <input 
        type="text" 
        className="form-control" 
        placeholder="Add product" 
        aria-label="Add product" 
        aria-describedby="button-addon2"
        value={this.props.inputText} 
        onChange={(evt)=>{this.props.onChange(evt.target.value)}}
      />
    );
  }

}
export default Input;