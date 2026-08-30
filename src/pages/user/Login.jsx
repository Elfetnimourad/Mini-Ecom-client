
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [remeberMe,setRemeberMe] = useState(false)
const navigate = useNavigate()
    //login
    const login = async(e)=>{
      e.preventDefault();
      try{
        const response = await fetch("https://mini-ecom-server.onrender.com/users/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            email,
            password
          })

        })

        const data = await response.json();
                console.log(data)

        if(response.ok){
          alert(`Login successful. Happy shopping ${data.user.username}! 🛍️`);
          navigate('/')
           if(remeberMe){
            localStorage.setItem("token",data.user.token)
          }else{
            sessionStorage.setItem("token",data.user.token)
          }
        }else{
          alert(data)
        }
      }catch(error){
        
        alert(error.message)
          
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
        style={{ width: "420px" }}
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
              🛒
            </div>

            <h2 className="fw-bold mt-3 mb-1">Welcome Back</h2>

            <p className="text-muted">
              Sign in to continue shopping
            </p>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
               value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Remember */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={remeberMe}
                onClick={(e)=>setRemeberMe(e.target.value)}
              />

              <label className="form-check-label">
                Remember me
              </label>
            </div>

            <a
              href="/forgot-password"
              className="text-decoration-none fw-semibold"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login */}
          <button
            className="btn btn-primary w-100 py-3 fw-bold rounded-3"
            type="button"
            onClick={login}
          >
            Sign In
          </button>

          {/* Register */}
          <div className="text-center mt-4">
            <span className="text-muted">
              Don't have an account?
            </span>

            <a
              href="/register"
              className="ms-2 text-decoration-none fw-bold"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}