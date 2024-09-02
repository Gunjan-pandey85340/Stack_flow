import "./App.css";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginForm from "./LoginForm.tsx";
import Counter from "./Counter.tsx";
import Table from "./Table.tsx";
import Home from "./Home.tsx";


const App=()=> {

  return (
    <>
      <Router>
          <Routes>
            {/* <Route path = "/home" element ={<Home/>} />  */}
            <Route path = "/LoginForm" element ={<LoginForm/>} /> 
            {/* <Route path = "/counter" element ={<Counter/>} /> 
            <Route path = "/table" element ={<Table/>} />  */}
          </Routes>
      </Router>
    </>
  );
};

export default App;
