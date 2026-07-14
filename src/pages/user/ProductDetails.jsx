import React from "react"
export default function ProductDetails(){
    return (
<div className="h-100 d-flex justify-content-center align-items-center">       
        <div className="card rounded" style={{width: "30rem",height:"30rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-flex justify-content-between">
    <a href="#" className="btn btn-primary">Add To Cart</a>
    <p className="m-1">price$</p>
    </div>
    
  </div>
</div>
 </div>
    )
}