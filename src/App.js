import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Product from './component/Product'
import Edit from './component/Edit';
import React from 'react'
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [auth,setAuth] = React.useState(false)
    const getlogin = () => {
        fetch(`https://reqres.in/api/login`)
        .then((res) => res.json())
        .then((res) => setAuth(true))
        setTimeout(() =>{
          navigate(`/`);
      },1000)
    }

    const handelLogin = () => {
      getlogin()

    }
  
  return (
    <div className="App">
      <Navbar auth={auth} />
      <Routes>
          <Route path="/Login" element={<Login getlogin={getlogin}/>} />
          <Route path="/" element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>

    </div>
  );
}

export default App;
