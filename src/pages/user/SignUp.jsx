import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  
  const [profilePic, setProfilePic] = useState(null);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const inputRefPic = useRef();
  const navigate = useNavigate()

  const handleFileRef = ()=>{
    inputRefPic.current.click()
  }

  //register
  const register = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("avatar",profilePic);

    try{
     const res =  await fetch("https://mini-ecom-server.onrender.com/users/register",{
      method:"POST",
      body:formData
     })
    const data = await res.json()
    console.log("data",data)
    if(res.ok){
      alert(`Hi ${username},Go Shopping Here`)
      navigate("/login")
    }
     res.status(201).json(`Hi ${username},Go Shopping Here`)
     
    }catch(error){
     console.error(error)
    }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #2563eb)",
      }}
    >
      <div
        className="card border-0 shadow-lg rounded-4"
        style={{ width: "500px" }}
      >
        <div className="card-body p-5">
          {/* Logo */}
          <div className="text-center mb-4">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold"
              style={{
                width: "70px",
                height: "70px",
                fontSize: "28px",
              }}
            >
              🛍️
            </div>

            <h2 className="fw-bold mt-3 mb-1">Create Account</h2>

            <p className="text-muted">
              Join us and start your shopping journey.
            </p>
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="John Doe"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
{/* Profile Picture */}
<div className="mb-3">
  <label className="form-label fw-semibold" onClick={handleFileRef}>
    Profile Picture
  </label>

  <input
    type="file"
    className="form-control form-control-lg"
    accept="image/*"
    ref={inputRefPic}
    onChange={(e)=>setProfilePic(e.target.files[0])}
  />

  <small className="text-muted">
    Upload your profile picture (JPG, PNG, WEBP).
  </small>
</div>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="john@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Create a password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          {/* Terms */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
            />

            <label
              className="form-check-label"
              htmlFor="terms"
            >
              I agree to the{" "}
              <a href="/terms" className="text-decoration-none">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            className="btn btn-primary w-100 py-3 fw-bold rounded-3"
            type="button"
            onClick={register}
          >
            Create Account
          </button>

          {/* Divider */}
       

          {/* Login */}
          <div className="text-center mt-4">
            <span className="text-muted">
              Already have an account?
            </span>

            <a
              href="/login"
              className="ms-2 text-decoration-none fw-bold"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}   