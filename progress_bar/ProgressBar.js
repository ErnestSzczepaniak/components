import React from 'react'

import './ProgressBar.css';

export default function ProgressSteps (props) {

    const styleCanvas = {
        top: String(props.position[0]) + "px",
        left: String(props.position[1]) + "px",
        width: String(props.size[0]) + "px",
        height: String(props.size[1]) + "px",
        borderRadius: String(props.size[1] / 2) + "px"
    };

    const styleProgress = {
        width: String(props.value) + "px",
        borderRadius: String(props.size[1] / 2) + "px",
        transition: props.transition ? props.transition : "1s"
    };

    return (
        <div className="progress-bar-canvas" style={styleCanvas}>
            <div className="progress-bar-progress" style={styleProgress}></div>
        </div>
    )
}