import React from 'react'

import './Flip.css'

export default function Flip (props) {

    const styleCanvas = {
        top: props.position[0] + "px",
        left: props.position[1] + "px",
        width: props.size[0] + "px",
        height: props.size[1] + "px",
        transition: props.transition ? props.transition : "1s",
        transform: props.flip ? "rotateY(-180deg)" : ""
    }

    return (
        <div className='flip-canvas' style={styleCanvas}>
            <div className='flip-card flip-front'>{props.front}</div>
            <div className='flip-card flip-back'>{props.back}</div>
        </div>
    )
}