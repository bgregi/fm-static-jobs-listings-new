import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import JSONData from './other/data.json'
import Card from './components/Card.jsx'
import FilterBar from './components/FilterBar'

function App() {
    const [clickedButtons, setButton] = useState([])
    const [jobsToRender, setJobs] = useState([...JSONData])

    useEffect(() => {
        if (clickedButtons[0] !== undefined) {
            const filteredJobs = JSONData.filter(filterCards)
            setJobs(filteredJobs)
        } else {
            setJobs([...JSONData])
        }
    }, [clickedButtons])

    function addFilter(e) {
        if (!clickedButtons.includes(e)) {
            setButton((prev) => [...prev, e])
        }
    }

    function removeFilter(e) {
        setButton((prev) => prev.filter((button) => button !== e))
    }

    function filterCards(job) {
        return (
            clickedButtons.includes(job.role) ||
            clickedButtons.includes(job.level) ||
            clickedButtons.some((n) => job.languages.includes(n)) ||
            clickedButtons.some((n) => job.tools.includes(n))
        )
    }

    function clearFilters(e) {
        setButton([])
    }
    
    let cardsList = jobsToRender.map((job) => (
        <Card
            key={job.id}
            id={job.id}
            company={job.company}
            logo={job.logo}
            new={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            addFilter={addFilter}
        />
    ))

    return (
        <div className="App">
            <header></header>
            <main>
                <FilterBar filters={clickedButtons} remove={removeFilter} clear={clearFilters} display={clickedButtons[0] !== undefined}/>
                {cardsList}
            </main>
        </div>
    )
}

export default App
