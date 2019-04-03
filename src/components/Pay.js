import React from "react"
import Card from "./product/Card"
import Button from "./core/Button"
import Save from "../components/Save"
class Pay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      total:0,
      totalVat:0,
      totalEcoTax:0,
      totalAfterTax :0,
      panierSave:[]
    }
  } 
  onChangeTotal(){
    let total=0
    let totalEcoTax=0
    let totalVat=0
    
    let produits=this.props.produits
    for(let i=0 ;i<produits.length;i++){
      total+=produits[i].price*produits[i].count;
      totalEcoTax+=produits[i].count*0.3;
      
      console.log(produits[i].price,produits[i].count,total)
    }
    totalVat = total*0.2 
    let totalAfterTax = total + totalVat + totalEcoTax ;
    this.setState({
      total,
      totalEcoTax:totalEcoTax.toFixed(2),
      totalVat :totalVat.toFixed(2) ,
      totalAfterTax :totalAfterTax.toFixed(2)  
    })
    console.log('total totalVat totalEcoTax',total,totalVat,totalEcoTax)
  }
  resetBasket(){
    const total=0
    const totalEcoTax=0
    const totalVat=0
    const totalAfterTax =0
    const produits=this.props.produits
    
    for(let i=0 ;i<produits.length;i++){
      produits[i].count=0
    }
    this.setState({
      total,
      totalEcoTax,
      totalVat,
      totalAfterTax 
    
    })
  }
  saveBasket(panierSave){
    console.log(">>saveBasket")
    
   const basket=this.props.produits
   console.log(">>saveBasket",this.state.panierSave)
   let date =new Date()
   panierSave=this.state.panierSave
   panierSave.push({date,basket})
    this.setState({
      panierSave

    })
    console.log("<<saveBasket")
    console.log(panierSave)
  }

render(){  
     if (this.props.produits.length === 0) {
      return (
        <h4 className="col-12">No items are available</h4>
      );
    }
  return(
    <div className=" box col-12 ">
     <div className="row">
        <div className="col-12">
          <Button onClick={()=>this.resetBasket()}>reset your basket</Button>
          <Button onClick={()=>this.saveBasket(this.state.panierSave)}>save your basket</Button> 
          <Button onClick={()=>{this.props.onChangeTabSave('save') }}>
          saved basket</Button>
      
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="float-right">SubTotal: {this.state.total} €</p>
        </div>
        <div className="col-12">
          <p className="float-right">VAT: {this.state.totalVat} €</p>
        </div>
        <div className="col-12">
          <p className="float-right">Eco tax: {this.state.totalEcoTax} €</p>
        </div>
        <div className="col-12">
          <p className="float-right" style={{fontSize: "2em"}}>Total: {this.state.totalAfterTax} €</p>
        </div>
      </div>
      <div className="row">
        
        {this.props.produits.map((produit,index)=>{return(  
        <Card 
          key={index} 
          name={produit.name} 
          price={produit.price}
          count={produit.count}   
          onClick={()=>{
            console.log(produit.name,produit.count);
            this.props.onChangeCount(produit.count++)  
            this.onChangeTotal()
            console.log(this.props.produits)          
        }}/>)})}
      </div>
     
    </div>
   
    
   );
}
 
}
export default Pay