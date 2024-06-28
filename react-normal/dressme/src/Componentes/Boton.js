import React from "react";
import { Link } from "react-router-dom";
import './Styles/Boton.css'
import buttom from '../Imagenes/add.png'



const Boton =()=>(
    <Link to="/Lista/Nueva">
        <img src={buttom} className="Fitness-Add" alt="" />
    </Link>
)

export default Boton