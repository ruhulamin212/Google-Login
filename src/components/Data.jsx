import React, { useEffect, useState } from "react";
import "./From.css";

function Data() {
  const data = { username: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.username || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <div>
      {flag && (
        <div>
          <h2>Hello {inputData.username}, you have registered successfully</h2>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={inputData.username}
          onChange={handleData}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={inputData.password}
          onChange={handleData}
        />

        <button className="button">Log in</button>

        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}

export default Data;
