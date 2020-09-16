import React from "react"

function LPGcomponent (props){
    return(
        <div>
            <img src = {props.image}
             style = {{height : 200 , width : 200}}
             alt = "pic"
             />
            
            <h3>Cylinder name : {props.name}</h3>
            
            <h3>Cylinder size : {props.size}</h3>
            
            
        </div>
    )
}

export default LPGcomponent;