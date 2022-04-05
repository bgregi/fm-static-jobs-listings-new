import React from 'react'
import './Card.css'
import Logo from './Logo'
import Company from './Company'
import NewAndFeatured from './NewAndFeatured'
import Position from './Position'
import LowerInfo from './LowerInfo'
import Button from './Button'



export default function Card(props) {
    const allButtons = [props.role, props.level].concat(props.languages, props.tools)

    const buttonsList = allButtons.map(item => <Button key={item} name={item} click={props.addFilter}/>)

    const stripClass = props.featured ? "strip" : "no-strip"
    
    return (
        <div className="card">
            <div className={stripClass}></div>
            <div className="main-info">
                <div className="main-logo">
                    <Logo id={props.id}/>                    
                </div>
                <div className="info">
                    <div className="upper-info">
                        <Company company={props.company} />
                        <NewAndFeatured new={props.new} featured={props.featured}/>
                    </div>
                    <div className="mid-info">
                        <Position position={props.position} />
                    </div>
                    <div className="lower-info">
                        <LowerInfo
                            postedAt={props.postedAt}
                            contract={props.contract}
                            location={props.location}
                        />
                    </div>
                </div>
            </div>
            <div className="buttons">
                {buttonsList}
            </div>
        </div>
    )
}