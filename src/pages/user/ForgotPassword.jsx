import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
const[email,setEmail] = useState("")
const resetLink = async()=>{
  try{
const response = await fetch("http://localhost:7000/users/forgot-password",{
    method:"POST",
    headers: {
    "Content-Type": "application/json",
  },
    body:JSON.stringify({
      email,
    })
  })
  const data = await response.json();
  console.log("data from the rest link",data)
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
          {/* Icon */}
          <div className="text-center mb-4">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
              style={{
                width: "75px",
                height: "75px",
                fontSize: "34px",
              }}
            >
              📧
            </div>

            <h2 className="fw-bold mt-3 mb-2">
              Forgot Password?
            </h2>

            <p className="text-muted">
              Don't worry! Enter the email associated with your account and
              we'll send you a password reset link.
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
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

          {/* Information */}
          <div className="alert alert-light border">
            <small className="text-muted">
              If an account exists with this email, you'll receive instructions
              to reset your password.
            </small>
          </div>

          {/* Button */}
          <button
            className="btn btn-primary w-100 py-3 fw-bold rounded-3 mt-3"
            type="button"
            onClick={resetLink}
          >
            Send Reset Link
          </button>

          {/* Back */}
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-decoration-none fw-semibold"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}