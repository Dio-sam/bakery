import React from "react";
import Add from "./components/Add"
import Button from "./components/core/Button"
import List from "./components/List"
import Pay from "./components/Pay"
const MIN_PRODUIT=1;
const MAX_PRODUIT=10;
class App extends React.Component{
  constructor(props){
    super(props);
    this.onChangeTab=this.onChangeTab.bind(this);
    this.inputName=this.inputName.bind(this)
    this.onChangeProduit=this.onChangeProduit.bind(this)
    this.itemProduit=this.itemProduit.bind(this)
    this.state={
      produit:1,
      name:"",
      Produits:[],
      activeTab:"add"
    }
  }
  onChangeTab(value){
    this.setState({
      activeTab:value
    })
      
    }
  
  onChangeProduit(value){
   
    this.setState({
      produit:value,
    })
  }
  inputName(data,prix){
    this.setState({
      name:data+" : "+prix+" euro"
    })
  }
  itemProduit(produit,prix){
    let item=this.state.Produits;
    if(item.length===0){
      item=[produit+" : "+prix+" euro"]
    }
    else{
      item.push(produit+" : "+prix+" euro")
    } 
    this.setState({
      Produits:item
    })
    console.log(item)
  }
  renderList(){
    return(
      <ul>
      {this.state.Produits.map((produit)=><li>{produit}</li>)}
    </ul>
    );
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <h2>Bakery</h2>
            <Button onClick={this.onChangeTab} isSlected="true">Add</Button>
            <Button>List</Button>
            <Button>Pay</Button>
          </div>
         
           <Add 
            itemProduit={this.itemProduit}
            inputName={this.inputName}
            produit={this.state.produit}
            onChangeFn={this.onChangeProduit}
            MAX_PRODUIT={MAX_PRODUIT}
            MIN_PRODUIT={MIN_PRODUIT}
          />
         
         <div className="col-12 ">
           <List/>
         </div >
         <div className="col-12 ">
           <Pay />
         </div>


          {/* <h4>{this.state.name}</h4> */}
          <div className="col-12">
             {this.renderList()}
          </div>
        </div>
   
      </div>
      

      
    );
  }

}
export default App