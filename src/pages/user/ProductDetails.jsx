import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [addCart,setAddCart] = useState([]);
  let [quantityItem,setQuantityItem] = useState(1)
  const { id } = useParams();
const addToCart = (item)=>{
  setQuantityItem(q=>q+1);
  console.log("quantityItem",quantityItem)
  const addedProduct = {productImg:item.img,quantity:quantityItem,productPrice:item.price,total:item.price*quantityItem}
// const p = new Set([...addedProduct]);
// console.log("p with set",p)
  setAddCart((prevCart)=>[...prevCart,addedProduct]);
console.log("addCart",addCart)
}
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      {itemData
        .filter((item) => item.id === Number(id))
        .map((item) => (
          <div
            key={item.id}
            className="card rounded"
            style={{ width: "30rem" }}
          >
            <img
              className="card-img-top"
              src={item.img}
              alt={item.title}
            />

            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>

              <p className="card-text">
                Rating: ⭐ {item.rate}
              </p>

              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-primary" onClick={()=>addToCart(item)}>
                  Add To Cart
                </button>

                <h5 className="m-0 text-success">
                  ${item.price}
                </h5>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
const itemData = [
  {
    id:1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    price:1000,
    rate:4
  },
  {
    id:2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    price:2000,
    rate:4.5
  },
  {
    id:3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    price:1050,
    rate:3.5
  },
  {
    id:4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    price:500,
    rate:6.9
  },
  {
    id:5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    price:900,
    rate:4.7
  },
  {
    id:12,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    price:500,
    rate:5.3
  },
  {
    id:6,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    price:450,
    rate:4.1
  },
  {
    id:7,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    price:300,
    rate:4.9
  },
  {
    id:8,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    price:1700,
    rate:4.3,
  },
  {
    id:9,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    price:700,
    rate:3.9
  },
  {
    id:10,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    price:200,
    rate:1.4
  },
  {
    id:11,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    price:100,
    rate:4.6
  },
];