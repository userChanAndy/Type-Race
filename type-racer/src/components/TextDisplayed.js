import React from 'react'
import TextCopy from './TextCopy'
import TextInput from './TextInput'
import Timer from './Timer'

function TextDisplayed() {
    return (
        <div>
            <Timer/>
            <TextInput/>
            <TextCopy/>
        </div>
    )
}

export default TextDisplayed
