import {Routes,Route} from "react-router-dom"
import Main from "./conponets/Main"
import Login from "./conponets/Login"
import Register from "./conponets/Register"
const App = () => {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Register" element={<Register/>}/>
     </Routes>
    </div>
  )
}

export default App

