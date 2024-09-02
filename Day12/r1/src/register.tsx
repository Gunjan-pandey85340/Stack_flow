import { useEffect, useState } from "react";
import api from "./axios";
const Register = () => {
  const [message, setMessage] = useState(false);
  const [data, setData] = useState({ 
    username: "", 
    email: "", 
    number: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [error, setError] = useState(null);

  const updateData = (type, event) => {
    setData({ ...data, [type]: event.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://127.0.0.1:5000/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    const response = await api.post("/register",data )
    console.log(data);

    const result = await response.data;
    console.log('result: ', result)
    setMessage("Registration successful!");
    console.log(result);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Register Form</h1>

      <div>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => updateData("username", e)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateData("email", e)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Number:
          <input
            type="number"
            value={data.number}
            onChange={(e) => updateData("number", e)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => updateData("password", e)}
          />
        </label>
      </div>
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;


