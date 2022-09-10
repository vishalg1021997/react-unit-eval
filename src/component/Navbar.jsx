import React from 'react'
import { Link } from "react-router-dom";
const Navbar = ({auth}) => {
  const [temp,setTemp] = React.useState(auth)


  return (

    
    <div>
        

        { auth && temp ? <Link to='/'>Home </Link>: <Link to='/login'>Home</Link> } 
        
        { auth && temp ? <Link to='/login'> <div onClick={() => {setTemp(false) }}>Logout</div></Link>:<Link to='/login'> <div onClick={() => {setTemp(true) }}>Login</div></Link>}
        {/* <Link to='/logout'> Logout</Link> */}
    </div>
  )
}

export default Navbar