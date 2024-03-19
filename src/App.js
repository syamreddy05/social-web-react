import React, { useContext } from "react";
import { Usecontext1 } from "./UserContext/Usercontext1";
import Home from "./Componenta/Home";
import Login from "./Componenta/Login";
import Register from "./Componenta/Register";
import Feeds from "./Componenta/Feeds";
import Posts from "./Componenta/Posts";
import Users from "./Componenta/Users";
import Todos from "./Componenta/Todos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from "./Componenta/Albums";

export default function App() {
  const { flag, setFlag } = useContext(Usecontext1);
  //const {flag,setFlag} = useContext(srikanth)
  //const [flag,setFlag] = useState()
  return (
    <>
    <Router>
      {flag == 0 || flag == 2 ? <Login /> : <Home />}
      {/* {flag ===0 && <Login/>} */}
      {/* {flag ===1 && <Home/>} */}
      {flag === 2 && <Register />}

      
        
        <Routes>
          <Route index path="/"  element={<Feeds />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/posts"  element={<Posts />}></Route>
          <Route path="/users"  element={<Users />}></Route>
          <Route path="/todos"  element={<Todos />}></Route>
        </Routes>
      </Router>

    </>
  );
}
