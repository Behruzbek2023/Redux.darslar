import { logo } from "../constants"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom p-2">
       <Link to={"/"} className="ms-5" style={{textDecoration:"none",color:"black",fontWeight:"bold",fontSize:"30px"}}>
        <img src={logo} alt="" width={"50px"} style={{borderRadius:"6px"}} className="mx-4"/>
        <span class="fs-4" style={{fontSize:"40px"}}>Home</span>
       </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto mx-5">
        <button className="btn btn-danger px-4 " style={{fontWeight:"bold"}}>Log In</button>
        <button className="btn btn-outline-success mx-3 px-4 "style={{fontWeight:"bold"}}>Register</button>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
