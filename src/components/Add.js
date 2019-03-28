import React from "react";
import RCSlider from "./core/RCSlider";
import Input from "./core/Input";
import Button from "./core/Button"
class Add extends React.Component{
  constructor(props){
    super(props);
    // this.props.nameFn(this.state.inputText);
    this.state={
      inputText:"",
      
    }
    this.onChangeInput=this.onChangeInput.bind(this);
  }
  onChangeInput(inputText){
    this.setState({                            
      inputText
    });
  }
  render(){
    return(
      <div className=" box">
        <h5>Non du produit:</h5>
        <Input 
          inputText={this.state.inputText} 
          onChange={this.onChangeInput}
        />
        <button onClick={()=>{
          this.props.inputName(this.state.inputText,this.props.produit);
          this.props.itemProduit(this.state.inputText,this.props.produit)
        }}>
          valide
        </button>
        <h5>prix:</h5>
        <p>{this.props.produit} EURO</p>
        <RCSlider
          min={this.props.MIN_PRODUIT}
          max={this.props.MAX_PRODUIT}
          value={this.props.produit}
          onChange={this.props.onChangeFn}
        />


      </div>    
    );

  }

}
export default Add;