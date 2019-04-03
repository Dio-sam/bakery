import React from "react"
class List extends React.Component{
render(){
  if (this.props.produits.length === 0) {
    return (
      <h4 className="col-12">No items are available</h4>
    );
  }
  return(
    <div className="box col-12">
     <ul className="list-group ">{this.props.produits.map((produit,index)=>
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
          {produit.name} 
          <span className="badge badge-success badge-pill">{produit.price} €</span>
        </li>
            )}
      </ul>
    </div>
    )}}
export default List

