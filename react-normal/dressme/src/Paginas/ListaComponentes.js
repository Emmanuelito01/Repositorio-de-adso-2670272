import React from "react";
import Lista from "../Componentes/ListadeTarjeta";
import Saludo from "../Componentes/Saludo";
import Boton from "../Componentes/Boton";
// import bob from '../Imagenes/lana2.webp';
// import Calamardo from '../Imagenes/lana3.jpg';
// import Patricio from '../Imagenes/lana4.jfif';

class ListaComponentes extends React.Component{
    state={
        data: [
            
        ]
    }
    async componentDidMount(){
        await this.cargarcomponentes()
    }
    cargarcomponentes=async()=>{
        let res=await fetch('http://localhost:8000/api/info')
        let data= await res.json()
        this.setState({
            data
        })
    }

render(){
    return(
        <React.Fragment>
            <Saludo
            username="Emmanuel"
            />
            <Lista
            exercises={this.state.data}
            />
           <Boton/>
        </React.Fragment>
    )
}
}
export default ListaComponentes


/*{
                id: 1,
                "title": "Norman Fucking Rockwell!",
                "description": "Norman Fucking Rockwell! ​es el sexto álbum de estudio de Lana Del Rey ",
                "img": bob,
                "leftColor": "#aecde0",
                "rightColor": "#C9D255"
            },{
                id: 2,
                "title": "Born to Die - The Paradise Edition",
                "description": "The Paradise Edition es la reedición del álbum de estudio debut de Lana Del Rey, Born to Die",
                "img": Calamardo,
                "leftColor": "#5b6250",
                "rightColor": "#e6c67b"
            },{
                id: 3,
                "title": "Chemtrails over the country club",
                "description": "Fue lanzado el 19 de marzo de 2021 por Interscope Records ",
                "img": Patricio,
                "leftColor": "#2f2f2f",
                "rightColor": "#999999"
            }*/