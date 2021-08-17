import {React, useState, useEffect} from 'react'
import io from 'socket.io-client'

import Choice from '../choice/Choice'

import './ChoiceGroup.css'

export default function ChoiceGroup (props) {

    const [chosenIndex, setChosenIndex] = useState(-1);
    const [labels, setLabels] = useState([]); 

    function choiceClicked (label) {
        setChosenIndex(labels.indexOf(label));
        props.notify(props.name, label);
    }

    useEffect(() => {
        const socket = io('http://localhost:8080');
        socket.emit('request', props.name, (labels) => {
            setLabels(labels);
        });
        return () => { socket.disconnect(); };
      }, []);

    return (
        <div className='choice-group-canvas'>
        {
            labels.map((label, index) => {
                return (
                <Choice 
                    key={index}
                    label={label} 
                    notify={choiceClicked}
                    isChosen={index === chosenIndex}
                />
                )
            })
        }
        </div>
    )
}