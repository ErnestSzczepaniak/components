import {React, useState, useEffect} from 'react'

import './ProgressSteps.css';

import ProgressBar from '../progress_bar/ProgressBar.js'

export default function ProgressSteps (props) {

    const styleCanvas = {
        top: String(props.position[0]) + "px",
        left: String(props.position[1]) + "px",
        width: String(props.steps * 100) + "px"
    };

    function styleDot(index) {
        return {
            left: String(index * 100 - 10) + "px",
            backgroundColor: index <= props.index ? "white" : "gray"
        }
    }

    function createDots() {
        var dots = []
        for (var index = 0; index < props.steps; index++)
        {
            dots.push(<div key={index} className='progress-steps-dot' style={styleDot(index)}></div>)
        }
        return dots
    }

    return (
        <div className="progress-steps-canvas" style={styleCanvas}>
            <ProgressBar position={[9, 0]} size={[(props.steps -1) * 100, 4]} value={props.index * 100} />
            {
                createDots()
            }
        </div>
    )
}