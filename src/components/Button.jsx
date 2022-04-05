import React from "react"
import './Button.css'

export default function Button(props) {
    return <div className="buttonsList" onClick={e => props.click(props.name)}    >
        {props.name}
    </div>
}