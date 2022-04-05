import React from "react"
import './Company.css'

export default function Company(props) {
    return (
        <div>
            <p className="company">
                {props.company}
            </p>        
        </div>
    )
}

