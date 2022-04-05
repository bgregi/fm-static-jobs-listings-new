import React from 'react'
import './FilterBar.css'
import FilterButton from './FilterButton'

export default function FilterBar(props) {
    const listOfFilters = props.filters.map(item => <FilterButton name={item} key={item} click={props.remove}/>)

    const filterBarClass = props.display ? "filter-bar-main" : "hide-filter-bar"
    // const filterBarClass = "filter-bar-main " + 

    return (
        <div className={filterBarClass}>
            <div className="left">
                {listOfFilters}
            </div>
            <div className="right" onClick={e => props.clear(e)}>
                Clear
            </div>
        </div>
    )
}