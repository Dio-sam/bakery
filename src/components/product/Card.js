import React from "react";
import specimen from '../../specimen.jpg';  
import Button from "../core/Button"

class Card extends React.Component{


  constructor(props){
    super(props);
    this.state={
     source:specimen
    }
  }
  onClickFn=()=>{

  }
    componentDidMount(){
      fetch(`http://digitous.konexio.eu/exercises/bakery/api/?q=${this.props.name}`)
        .then((res)=>res.json())
        .then((data)=>{
          this.setState({
            source:data.source
          })
        })
    }
render(){
  return(
    <div className="col-6 col-md-3">

      <Button onClick={this.props.onClick}>
        
        <img src= {this.state.source} alt={this.props.name}/>
        <p>{this.props.name} :  {this.props.price} €  *  {this.props.count}</p>
      </Button>
      
   
  </div>  
    )}
  }
export default Card