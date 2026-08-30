import React, { useRef, useState } from "react";


export default function AddProduct() {
  const imageRef = useRef();
  const [name,setName] = useState("");
  const [category,setCategory] = useState("");
  const [brand,setBrand] = useState("");
  const [price,setPrice] = useState();
  const [stock,setStock] = useState("");
  const [cover,setCover] = useState("");
  const [description,setDescription] = useState("");
  const [rate,setRate] = useState();

  
const addProduct = async(e)=>{
    e.preventDefault();

  const formData = new FormData();
  formData.append("name",name)
  formData.append("category",category)
  formData.append("brand",brand)
  formData.append("price",price)
  formData.append("stock",stock)
  formData.append("cover",cover)
  formData.append("description",description)
  formData.append("rate",rate)

for (let [key, value] of formData.entries()) {
  console.log(key, value);
}
  try{
const response = await fetch("https://mini-ecom-server.onrender.com/products/addProduct",{
  method:"POST",

  body:formData,

})
const data = await response.json();
console.log("data",data);

  }catch(error){
    console.error(error);
  }
}
const handleImageRef = ()=>{
  imageRef.current.click();
}
  return (
    <div className="admin-page">
      <div className="card shadow-lg admin-card border-0">

        <div className="card-body p-5">

          <h2 className="fw-bold mb-1">📦 Add Product</h2>
          <p className="text-muted mb-4">
            Fill in the details below to add a new product.
          </p>

          <form>

            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <select className="form-select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option>Select Category</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand name"
                  value={brand}
                  onChange={(e)=>setBrand(e.target.value)}
                />
              </div>

            </div>

          <div className="row">

  <div className="col-md-4 mb-3">
    <label className="form-label">Price ($)</label>
    <input
      type="number"
      className="form-control"
      placeholder="Price"
      min="0"
      step="0.01"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <div className="col-md-4 mb-3">
    <label className="form-label">Stock</label>
    <input
      type="number"
      className="form-control"
      placeholder="Stock Quantity"
      min="0"
      value={stock}
      onChange={(e) => setStock(e.target.value)}
    />
  </div>

  <div className="col-md-4 mb-3">
    <label className="form-label">Rating ⭐</label>
    <input
      type="number"
      className="form-control"
      placeholder="0 - 5"
      min="0"
      max="5"
      step="0.1"
      value={rate}
      onChange={(e) => setRate(e.target.value)}
    />
  </div>

</div>

            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input type="file" className="form-control" ref={imageRef} onChange={(e)=>setCover(e.target.files[0])} onClick={handleImageRef}/>
            </div>

            <div className="mb-4">
              <label className="form-label">Description</label>
              <textarea
                rows="4"
                className="form-control"
                placeholder="Write product description..."
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-primary w-100 py-2" onClick={addProduct}>
              Add Product
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}