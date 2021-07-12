import {React, useState} from 'react'

import './ChoiceGroup.css'

export default function ChoiceGroup (props) {

    const [chosenIndex, setChosenIndex] = useState(-1)

    function choiceClicked (index) {
        setChosenIndex(index)
    }

    return (
        <div className='choice-group-canvas'>
        {
            props.choices.map((choice, index) => {
                return <props.object.type
                key={index}
                index={index}
                label={choice[0]} 
                notify={choiceClicked}
                isChosen={index == chosenIndex}/>
            })
        }
        </div>
    )
}