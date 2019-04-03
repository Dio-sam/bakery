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
      <div className=" box col-12">
        <h5>Non du produit:</h5>
        <div className="input-group mb-3">
          <Input 
            inputText={this.state.inputText} 
            onChange={this.onChangeInput}
          />
          <div className="input-group-append">
            <Button onClick={()=>{this.props.itemProduits(
                                  this.state.inputText,
                                  this.props.prix,
                                  this.props.count)}}>
              Add
            </Button>
          </div>
        </div>

        <h5>Prix:</h5>

        <p>{this.props.prix}  €</p>

        <RCSlider
          min={this.props.MIN_PRIX}
          max={this.props.MAX_PRIX}
          value={this.props.prix}
          onChange={this.props.onChangeFn}

        />


      </div>    
    );

  }

}
export default Add;