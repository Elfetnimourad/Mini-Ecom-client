import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate()
  const inputRef = useRef();
  const [product,setProduct] = useState()
  const [name,setName] = useState("");
  const [price,setPrice] = useState();
  
  const [stock,setStock] = useState("");
  const [rate,setRate] = useState("");
  const [cover,setCover] = useState("");
  const [category,setCategory] = useState("");
  const [description,setDescription] = useState("");
  const [brand,setBrand] = useState("");
  const formData = new FormData();


  const params = useParams();
  const {id} = params;
  console.log("id",id)
  useEffect(()=>{
const getSingleProduct = async()=>{
  try{
const res = await fetch(`https://mini-ecom-server.onrender.com/products/getSingleProduct/${id}`)
const data = await res.json();
setProduct(data);
console.log("product",data)
  }catch(error){
    console.error(error)
  }
}
getSingleProduct()
  },[id])
  const saveEditing = async()=>{
     try{
     formData.set("price",price);
  formData.set("stock",stock);
  formData.set("rate",rate);
  formData.set("cover",cover);
  formData.set("name",name);
  formData.set("category",category);
  formData.set("description",description);
  formData.set("brand",brand)

for (let [key, value] of formData.entries()) {
  console.log(key, value);
}
const res = await fetch(`https://mini-ecom-server.onrender.com/products/${id}`,{
  method:"PATCH",

  body:formData,
})

const data = await res.json()
console.log("updated product",data)
  }catch(error){
    console.error(error)
  }
  }
  const inputRefHandel = ()=>{
   inputRef.current.click();
  }
  const chooseImageProduct = (e)=>{
    setCover(e.target.files[0]);
  }
 return (
  <div
    className="min-vh-100 py-5"
    style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
    }}
  >
    <div className="container">
      <div
        className="card border-0 shadow-lg mx-auto overflow-hidden"
        style={{
          maxWidth: "900px",
          borderRadius: "24px",
        }}
      >
        {/* Header */}
        <div
          className="p-4 p-md-5 text-white"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.12)",
                fontSize: "28px",
              }}
            >
              ✏️
            </div>

            <div>
              <h2 className="fw-bold mb-1">Edit Product</h2>

              <p
                className="mb-0"
                style={{ color: "rgba(255,255,255,.7)" }}
              >
                Update your product information and save your changes.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="card-body p-4 p-md-5">
          <form>

            {/* Product Name */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Product Name
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter product name"
                style={{
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
                value={name || product?.name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            {/* Category + Brand */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Category
                </label>

                <select
                  className="form-select form-select-lg"
                  style={{ borderRadius: "12px" }}
                  value={category || product?.category}
                onChange={(e)=>setCategory(e.target.value)}
                >
                  <option>Select Category</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                  <option>Sports</option>
                  <option>Home</option>
                </select>
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  Brand
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Brand name"
                  style={{
                    borderRadius: "12px",
                  }}
                  value={brand || product?.brand}
                onChange={(e)=>setBrand(e.target.value)}
                />
              </div>
            </div>

          {/* Price + Stock + Rating */}
<div className="row">

  {/* Price */}
  <div className="col-md-4 mb-4">
    <label className="form-label fw-semibold">
      Price
    </label>

    <div className="input-group input-group-lg">
      <span
        className="input-group-text"
        style={{
          borderRadius: "12px 0 0 12px",
          background: "#f8fafc",
        }}
      >
        $
      </span>

      <input
        type="number"
        className="form-control"
        placeholder="0.00"
        min="0"
        step="0.01"
        style={{
          borderRadius: "0 12px 12px 0",
        }}
        value={price || product?.price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  </div>

  {/* Stock */}
  <div className="col-md-4 mb-4">
    <label className="form-label fw-semibold">
      Stock Quantity
    </label>

    <input
      type="number"
      className="form-control form-control-lg"
      placeholder="Enter stock quantity"
      min="0"
      style={{
        borderRadius: "12px",
      }}
      value={stock || product?.price}
      onChange={(e) => setStock(e.target.value)}
    />
  </div>

  {/* Rating */}
  <div className="col-md-4 mb-4">
    <label className="form-label fw-semibold">
      Rating ⭐
    </label>

    <input
      type="number"
      className="form-control form-control-lg"
      placeholder="0 - 5"
      min="0"
      max="5"
      step="0.1"
      style={{
        borderRadius: "12px",
      }}
      value={rate || product?.rate}
      onChange={(e) => setRate(e.target.value)}
    />

    <small className="text-muted">
      Enter a rating between 0 and 5
    </small>
  </div>

</div>

            {/* Image */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Product Image
              </label>

              <div
                className="p-4 text-center"
                style={{
                  border: "2px dashed #cbd5e1",
                  borderRadius: "16px",
                  background: "#f8fafc",
                }}
                onClick={inputRefHandel}
              >
                <div
                  style={{
                    fontSize: "35px",
                    marginBottom: "10px",
                  }}
                >
                  🖼️
                </div>

                <p className="fw-semibold mb-1">
                  Change product image
                </p>

                <p className="text-muted small mb-3">
                  Choose a new image if you want to replace the current one.
                </p>

                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  style={{
                    borderRadius: "12px",
                  }}
                  ref={inputRef}
                  onChange={chooseImageProduct}
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Description
              </label>

              <textarea
                rows="5"
                className="form-control"
                placeholder="Write product description..."
                style={{
                  borderRadius: "12px",
                  resize: "vertical",
                  padding: "14px",
                }}
                value={description || product?.description}
                onChange={(e)=>setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row gap-3">
              <button
                type="button"
                className="btn btn-light border py-3 px-4 fw-semibold"
                style={{
                  borderRadius: "12px",
                }}
                onClick={()=>navigate('/admin/products')}
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-primary flex-grow-1 py-3 fw-bold"
                onClick={saveEditing}
                style={{
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #2563eb, #4f46e5)",
                  border: "none",
                  boxShadow: "0 8px 20px rgba(37,99,235,.25)",
                }}
              >
                ✓ Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
);
}