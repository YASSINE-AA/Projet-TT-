import React, { useState } from "react";
import logo from "../assets/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase";

const Login = () => {
  const [mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigate();

  const OnLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, mail, Password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation("/dashboard");
          console.log(user);
        }
      );
    } catch (error) {
      alert("Bad Credential");
    }
  };
  return (
    <div className="auth-container">
      <div className="login-container">
        <div className="login-card">
          <img className="logo-login" src={logo} alt="logo" />
          <h2 className="login-header">Sign In</h2>

          <form>
            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <input
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Email"
                  autoComplete="new-email"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="button" className="login-button" onClick={OnLogin}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
