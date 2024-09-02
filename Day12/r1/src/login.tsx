// import { useState } from "react";
// import api from "./axios";


// const Login = () => {





//   const [message, setMessage] = useState(false);
//   const [data, setData] = useState({ email: "Intial", password: "initial" });
//   const [error, setError] = useState(null);

//   const updateData = (type, event) => {
//     setData({ ...data, [type]: event });
//   };

//   const handlesSubmit = async (e) => {
//     e.preventDefault();

//     // const response = await fetch("http://127.0.0.1:5000/login", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     "Accept": "application/json"

//     //   },
//     //   body: JSON.stringify({ email: data.email, password: data.password }),
//     // });



//     const response = await api.post("/login",data)





//     console.log(data);

//     const result = await response.data;
//     // setMessage("result"?.msg);

//     setMessage({ msg: result.msg, class: result.class });
//     console.log(result);
//   };






//   return (

    


//     <>


// {/* <h1>hello</h1> */}
    
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>Login Form</h1>


//       <div>
//         <label>
//           Username:
//           <input
//             type="email"
//             onChange={(e) => updateData("email", e.target.value)}
//           />
//         </label>
//       </div>
//       <br />

//       <div>
//         <label>
//           Password:
//           <input
//             type="password"
//             onChange={(e) => updateData("password", e.target.value)}
//           />
//         </label>
//       </div>
//       <br />

//       <button onClick={handlesSubmit}>Submit</button>



//       {message && (
//         <p style={{ color: message.class === "success" ? "green" : "red" }}>
//           {message.msg}
//         </p>
//       )}
//     </div>

//     </>
//   );
// };

// export default Login;

// import { useState } from "react";
// import api from "./axios";

// interface LoginProps {
//   // Define any props that Login component might receive here
// }

// interface MessageState {
//   msg: string;
//   class: "success" | "error";
// }

// interface DataState {
//   email: string;
//   password: string;
// }

// const Login: React.FC<LoginProps> = (props) => {
//   const [message, setMessage] = useState<MessageState | null>(null);
//   const [data, setData] = useState<DataState>({ email: "Initial", password: "initial" });
//   const [error, setError] = useState<string | null>(null);

//   const updateData = (type: keyof DataState, value: string) => {
//     setData({ ...data, [type]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await api.post("/login", data);
//       const result = response.data;

//       if(result ?.payload?.token){
//         localStorage.setItem("token",result?.payload?.token);
//       }

//       setMessage({ msg: result.msg, class: result.class });
//     } catch (error) {
//       setError("Login failed. Please try again.");
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>Login Form</h1>

//       <div>
//         <label>
//           Username:
//           <input
//             type="email"
//             onChange={(e) => updateData("email", e.target.value)}
//           />
//         </label>
//       </div>
//       <br />

//       <div>
//         <label>
//           Password:
//           <input
//             type="password"
//             onChange={(e) => updateData("password", e.target.value)}
//           />
//         </label>
//       </div>
//       <br />

//       <button onClick={handleSubmit}>Submit</button>

//       {message && (
//         <p style={{ color: message.class === "success" ? "green" : "red" }}>
//           {message.msg}
//         </p>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;