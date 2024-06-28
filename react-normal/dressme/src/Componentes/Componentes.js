import React from "react";
import Lista from "../Componentes/ListadeTarjeta"
import Saludo from "../Componentes/Saludo"
import Boton from "../Componentes/Boton"

const Componentes=({data})=>(
    <React.Fragment>
        <Saludo
        username="Emma"
        />
        <Lista
        exercises={data}
        />
        <Boton/>
    </React.Fragment>
)
export default Componentes