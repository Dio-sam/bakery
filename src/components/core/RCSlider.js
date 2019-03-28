import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
class RCSlider extends React.Component{
render(){
  return(

    <Slider 
      min={this.props.min} 
      max={this.props.max} 
      value={this.props.value} 
      onChange={(val)=>{this.props.onChange(val)}}/>
  );


}
}
export default RCSlider;