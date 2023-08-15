import {Link} from 'react-router-dom'
import React from "react";
function Navbar() {
  return <div className="">
    <ul id="nav">
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/create-post'>CreatePost</Link></li>
    </ul>
  </div>;
}

export default Navbar;
