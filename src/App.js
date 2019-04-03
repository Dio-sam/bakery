import React from "react";
import Add from "./components/Add"
import Button from "./components/core/Button"
import List from "./components/List"
import Pay from "./components/Pay"
import Save from "./components/Save"
const MIN_PRIX=1;
const MAX_PRIX=10;

class App extends React.Component{
  constructor(props){
    super(props);
    this.onChangeTabAdd=this.onChangeTabAdd.bind(this);
    this.onChangeTabList=this.onChangeTabList.bind(this);
    this.onChangeTabPay=this.onChangeTabPay.bind(this);
    this.onChangeTabSave=this.onChangeTabSave.bind(this);
    this.onChangeProduit=this.onChangeProduit.bind(this);
    this.onChangeCount=this.onChangeCount.bind(this);
    this.itemProduits=this.itemProduits.bind(this);
    
    this.state={
      prix:1,
      Produits:[],
      activeTab:"add",
      count:1
    }
  }

  onChangeTabAdd(tabName){
  this.setState({

      activeTab:tabName
    })
  }
  onChangeTabList(tabName){
 
  this.setState({

      activeTab:tabName 
    })
  }
  onChangeTabPay(tabName){
  
  this.setState({

      activeTab:tabName 
    })
  }
  onChangeTabSave(tabName){
  console.log(">> onChangeTabSave")
    this.setState({
      
        activeTab:tabName 
      })
      console.log("Save",tabName)
      console.log("<< onChangeTabSave")
    }
  onChangeCount(count){
    this.setState({
      count:count
    });
    console.log(count)
  }

  onChangeProduit(prix){
   
    this.setState({
      prix,
    });
  }
  itemProduits(name,price,count){
   count=1
    let item=this.state.Produits;
    let objproduit={name,price,count}
    item.push(objproduit)
    this.setState({
      
      Produits:item
    })
    console.log(item)
  }
  
  renderList(){
    return(
    <div className="col-12 ">
    <h2>Bakery</h2>       
    <Button  isSlected={this.state.activeTab === 'add'} 
              onClick={()=>{ this.onChangeTabAdd('add')}}>
      Add
    </Button>
    <Button  isSlected={this.state.activeTab === 'list'} 
              onClick={()=>{this.onChangeTabList('list');}}>
     List
    </Button>
    <Button isSlected={this.state.activeTab === 'pay'} 
            onClick={()=>{this.onChangeTabPay('pay'); }}>
     Pay
    </Button>
  </div>)
}

  render(){

    return(
      <div className="container-fluid">
        
{/* *********** */}
        <div className="row">
          { this.renderList()}
        </div>
{/* ********************* */}
        <div className="row">
          {this.state.activeTab === "add" && 
            <Add 
              itemProduits={this.itemProduits}
              prix={this.state.prix}
              count={this.state.count}
              onChangeCount={this.onChangeCount}
              onChangeFn={this.onChangeProduit}
              MAX_PRIX={MAX_PRIX}
              MIN_PRIX={MIN_PRIX}
            /> 
          }
        </div>
{/* ********************** */}
        <div className="row">
            {this.state.activeTab === "list" && 
              <List produits={this.state.Produits}/>
            }
        </div>

{/* ******************* */}

        <div className="row">
            {this.state.activeTab === "pay" && 
              <Pay  
                count={this.state.count}
                produits={this.state.Produits}
                onChangeCount={this.onChangeCount}
                onChangeTabSave={this.onChangeTabSave}
                activeTab={this.state.activeTab} 
              />}
        </div>
        <div className="row">
      {this.state.activeTab==='save'&&
         <Save/> 
    
      }
      </div>
   
      </div>
      

      
    );
  }

}
export default App 

