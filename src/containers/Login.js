import React, { Component } from "react";
import "./login.css";
export default class Login extends Component {
  render() {
    return (
      <div className="main-container" >
        <h1>Login</h1>
        <div className="sub-container">
          <div className="input-container">
            <p style={{ fontWeight: "600" }}>Email</p>
            <input
              type={"text"}
              style={{ padding: "8px" }}
              placeholder="Enter Email"
            />
          </div>
          <div className="input-container">
            <p style={{ fontWeight: "600" }}>Password</p>
            <input
              type={"password"}
              style={{ padding: "8px" }}
              placeholder="Password"
            />
          </div>
          <div>
            <button
              style={{
                fontWeight: "600",
                padding: "8px 8px",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
