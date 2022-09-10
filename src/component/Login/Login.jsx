import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = ({getlogin}) => {
  const navigate = useNavigate();

    const [UserName,setUserName] = React.useState('')
    const [Password,setPassword] = React.useState('')
    // const [auth,setAuth] = React.useState(false)
    // const getlogins = () => {
    //     fetch(`https://reqres.in/api/login`)
    //     .fetch((res) => res.json())
    //     .fetch((res) => setAuth(res.token))
    //     setTimeout(() =>{
    //       navigate(`/`);
    //   },1000)
    // }
    


  return (
    <div>
        <input type="text" value={UserName} placeholder='Enter username' onChange={(event) => setUserName(event.target.value)}/>
        
        
        
        <input type="text" value={Password} placeholder='Enter password' onChange={(event) => setPassword(event.target.value)}/>
  
        <button onClick={getlogin}>Login</button>
    </div>
  )
}

export default Login