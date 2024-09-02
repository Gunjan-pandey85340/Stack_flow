import  { createContext, useState } from 'react';
import './App.css';
import Counter from './Counter';
import LoginForm from './LoginForm';
import Table from './Table';

export const TitleContext = createContext();

export const HomePage = () => {
  const [title, setTitle] = useState("GLA University");

  return (
  
    <>
    <TitleContext.Provider value={title}>
      <div className="home-page">
    <h1>Welcome to My Home Page</h1>
    <p><h2>This is a simple Sample of My Study.</h2></p>
    <nav>
      <a href="/home" target="_blank" style = {{marginRight: "10px"}}>
      <button>Home</button>
      </a>
      <a href="/login" target="_blank" style = {{marginRight: "10px"}}>
      <button>Login</button>
      </a>
      <a href="/table" target="_blank" style = {{marginRight: "10px"}}>
      <button>Table</button>
      </a>
      <a href="/counter" target="_blank" style = {{marginRight: "10px"}}>
      <button>Counter</button>
      </a>
    </nav>
  </div>
  <h1> Counter </h1>
  <Counter />
 <h1>Table</h1> 
 <Table />
 <h1>LoginForm</h1> 
 <LoginForm/>
    </TitleContext.Provider>
  </>
  );
};

export default HomePage;