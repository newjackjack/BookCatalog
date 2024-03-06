import React from 'react'
import {
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

const NavBar = (props) => {
  console.log("props", props)
  //props is an object its value is an object oneBook
  const {navHead} = props;
  // console.log("props:", navHead)//empty object
  // console.log("props.bookForProps:",props.bookForProps);//undefined
  // const{title} = props.bookForProps
  // console.log(title);
  return (
    <div style={{display:'flex'}}>
        <div style={{ justifyContent:"center", textAlign:"center"}}>
          <Link to="/"style={{ justifyContent:"center", textAlign:"center", margin:"2vw"}}>Catalog</Link>
          <br />
          <Link to="/create">Add Book</Link>
        </div>
        <h1>{navHead}</h1>
    </div>
  )
}

export default NavBar