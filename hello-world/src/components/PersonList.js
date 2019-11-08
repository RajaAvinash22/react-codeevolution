import React from 'react'

function PersonList({person}) {
    return (
        <div>
            
            <h2>{person.age}</h2>
            <h2>{person.name}</h2>
        </div>
    )
}

export default PersonList
