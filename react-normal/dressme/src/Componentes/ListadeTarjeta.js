import React from "react";
import Tarjeta from "./Tarjeta";

const Lista=({exercises})=>(
    <React.Fragment>
        {
                exercises.map((exercise)=>{
                    return(
                        <Tarjeta
                        key={exercise.id}
                        {...exercise}
            />
                    )
                }
            )
            }
    </React.Fragment>
)

export default Lista