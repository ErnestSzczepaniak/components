import React from 'react'

import './Slide.css'

export default function Slide (props) {

    return (
        <div className='slide-canvas'>
            <div className='slide-title'>{"Step " + props.step + ": " + props.title}</div>
            <div className='slide-separator'></div>
        </div>
    )
}