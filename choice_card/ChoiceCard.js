import React from 'react'

import './ChoiceCard.css'

export default function ChoiceCard(props) {
    
    const styleCanvas = {
        border: props.isChosen ? "2px solid white" : "2px solid gray",
        color: props.isChosen ? "white" : "gray"
    }

    const styleImage = {
        color: props.isChosen ? "white" : "gray"
    }

    const styleHr = {
        backgroundColor: props.isChosen ? "white" : "gray"
    }

    const styleLabel = {
        color: props.isChosen ? "white" : "gray"
    }

    return (
        <div className='choice-card-canvas' style={styleCanvas} onClick={()=>{props.notify(props.index)}}>
            <div className='choice-card-image' style={styleImage}></div>
            <div className='choice-card-hr' style={styleHr}></div>
            <div className='choice-card-label' style={styleLabel}>{props.label}</div>
        </div>
    )
}