import React from "react";
import './Styles/Tarjeta.css' 
import image from "../Imagenes/Calamardo.png"
import circlesImg from '../Imagenes/circles.png'

const Tarjeta=({title, description,img, leftColor, rightcolor})=>(
    <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || 'pink' }, ${rightcolor || 'red'})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || image} alt="" className="float-right ti"/>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
)

// class Tarjeta extends React.Component{
  
//     render(){
//         const { title, description,img, leftColor, rightcolor } = this.props
//         return (
//             
//         )
//     }
// }
export default Tarjeta 
