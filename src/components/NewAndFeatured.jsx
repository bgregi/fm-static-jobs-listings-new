import React from "react"
import './NewAndFeatured.css'

export default function NewAndFeatured(props) {
    const newClass = props.new.toString() + " new"
    const featuredClass = props.featured.toString() + " featured"
    
    

    return (
        <div className="new-and-featured">
            <div className={newClass}>
               NEW! 
            </div>
            <div className={featuredClass}>
                FEATURED
            </div>
        </div>
    )
}