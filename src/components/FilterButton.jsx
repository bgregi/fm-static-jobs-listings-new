import React from 'react'
import './FilterButton.css'
import closeButton from '../images/icon-remove.svg'

export default function FilterButton(props) {
    return (
        <div className="whole-button">
            <div className="main-button">{props.name}</div>
            <div className="close-button" onClick={e => props.click(props.name)}>
                <img src={closeButton} alt="X" className="x-button" />
            </div>
        </div>
    )
}