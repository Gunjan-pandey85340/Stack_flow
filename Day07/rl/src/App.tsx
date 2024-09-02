//  import { useState } from "react";
// import './App.css';
// // const LoginForm = () => {
//   const[data,setdata] = useState({email:"Initial",password:"Initial"});
//   const[isloggedIn,setIsLoggedIn] = useState(false);
//   const[error,setError] = useState(null);
// //};

// // export const App = () => {
// //   const [data, setData] = useState({ email: "Initial", password: "Initial" });
// //   const updateData =  (type,event) => {
// //     setData({...data,[type]: event.target.value});
// //   }
// //   const handleChange = ({target}) => {
// //     const { name, value } = target
// //       const newData = Object.assign({}, setLoginData, { [name]: value })
// //         setLoginData(newData)
// //     }
// //   return (
// //     <><form>

// //       <label htmlFor="mail"><b>Email: </b></label>
// //       <input className="mail" type="email" id="mail" name="mail" placeholder="Enter your mail" required onChange={(event) => updateData("email",event)} />
// //       <br />
// //       <br />
// //       <label htmlFor="password"><b>Password: </b></label>
// //       <input type="password" id="password" name="password" required placeholder="Enter password" onChange={(event) => updateData("password",event)} />
// //       <br />
// //       <br />
// //       <button className="button" type="Login"><b>Login</b></button>
// //     </form>
// //       <h2 className="userinput"><b>The entered email is {data.email} </b></h2>
// //       <h2 className="userinput"><b>and the password is {data.password}</b></h2>
// //     </>
// //   )
// // };


// function setLoginData(newData: any) {
//   throw new Error("Function not implemented.");
// }
//   const getData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const responseValue = await response.json();
//     console.log("~getData~responseValue:", responseValue);
//     setdata(responseValue);
//   };
//   const handleRemove = (idx: number) => {
//     setdata(data.filter((item: any, index: number) => index !== idx));
//   };
//   const resetData = () => {
//     setdata([]);
//   };

//    return (
//     <>
//       <h1>Hi!</h1>
//       <h2>Gunjan Pandey</h2>
//       <button onClick={() => getData()}>Get Data</button>
//       <button onClick={() => resetData()}>Reset Data</button>
//       <table>
//         <tr>
//           <th>S.No</th>
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Action</th>
//         </tr>
//         {data.map((item, idx) => (
//           <tr key={idx}>
//             <td>{idx + 1}</td>
//             <td>{item.name}</td>
//             <td>{item.username}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td>
//               <button onClick={() => handleRemove(idx)}>Remove</button>
//             </td>
//           </tr>
//         </>
//         ))}

//       )
//       </Table>


// export default App;






// // // // Day 08

// // // // import { useEffect, useState } from "react";
// // // // import "./App.css";
// // // // import Counter from "./counter";
// // // // const App = () => {
// // // //   const[count,setCount] = useState(100);
// // // //   const[loading,setLoading] = useState(1000);
// // // //   const display = true;
// // // //   const updateCount = () => {
// // // //     setCount (count + 1 );
// // // //     console.log("count",count);a
// // // //   };
// // // //   useEffect(() =>{

// // // //   },[count]);
// // // //   return (
// // // //     <>
// // // //     {loading && <h1> Loading.....</h1>}
// // // //     {!loading && (
// // // //     <><h1>Hello</h1><h2>HI</h2><Counter
// // // //           buttonLabel1="App Counter Button"
// // // //           count={count} {...updateCount} /></>
// // // //     </>
// // // //   )}


// 








// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => setData(json));
//   };

//   const resetData = () => {
//     setData([]);
//   };

//   const handleRemove = (idx: number) => {
//     const newData = [...data];
//     newData.splice(idx, 1);
//     setData(newData);
//   };

//   return (
//     <div className="container">
//       <table>
//       <caption className="uni">Table Content</caption>
//         <tr>
//           <th colSpan={6}>
//             <button onClick={getData} className="button">Get Data</button>
//             <button onClick={resetData} className="button">Reset Data</button>
//           </th>
//         </tr>
//         <tr>
//           <th>S.No</th>
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Action</th>
//         </tr>
//         {data.map((item, idx) => (
//           <tr key={idx}>
//             <td>{idx + 1}</td>
//             <td>{item.name}</td>
//             <td>{item.username}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td>
//               <button onClick={() => handleRemove(idx)} className="button">Remove</button>
//             </td>
//           </tr>
//         ))}
  
//       </table>
//     </div>
//   );
// }

// export default App;












import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginForm from "./login";
// import register from "./register";
import Table from "./table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* <Route path="/login" element={<LoginForm />} /> */}

        
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/table" element={<Table/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;