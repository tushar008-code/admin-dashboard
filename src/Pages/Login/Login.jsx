import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function Success(e) {
    e.preventDefault();
    if (!email && !password) return;
    setEmail("");
    setPassword("");
    navigate("/");
  }

  return (
    <>
      <section className="login-sec">
        <div className="login-content">
          <h3>Dashboard</h3>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
        <div className="login-card">
          <form action="" onSubmit={Success}>
            <h4>Login</h4>
            <p>Sign in if you have an account in here</p>
            <div className="form-group">
              <label htmlFor="">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-0">
              <label htmlFor="">Your Password</label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className="eye"
                onClick={() => {
                  setShowPass((prev) => !prev);
                }}
              >
                {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            <h6>Forgot Password ?</h6>
            <div className="form-group">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
