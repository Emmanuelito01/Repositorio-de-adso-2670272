import React from "react";
import Nueva from "./Nueva";
import { useNavigate } from "react-router-dom";

const Navegar = ()=>{
    const navigate=useNavigate()
    return <Nueva navigate={navigate}/>
}
export default Navegar