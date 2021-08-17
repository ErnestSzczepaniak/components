import React from 'react'

import './Choice.css'

export default function Choice(props) {
    
    const styleCanvas = {
        border: props.isChosen ? "2px solid white" : "2px solid gray",
        color: props.isChosen ? "white" : "gray"
    }

    return (
        <div className='choice-canvas' style={styleCanvas} onClick={()=>{props.notify(props.label)}}>
            {props.label}
        </div>
    )
}