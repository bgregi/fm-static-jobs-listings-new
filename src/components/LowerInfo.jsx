import React from "react"
import './LowerInfo.css'

export default function LowerInfo(props) {
    return <div className="lowerInfo">
        <p className="PLowerInfo">{props.postedAt}</p>
        <div className="mid-point"></div>
        <p className="PLowerInfo">{props.contract}</p>
        <div className="mid-point"></div>
        <p className="PLowerInfo">{props.location}</p>
    </div>
}