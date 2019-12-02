import React from 'react'

function ImKey() {
    const person = {
        name: 'Chris',
        twitter: 'chrisoncode',
        bio: 'The dude at scotch.io'
      };
    
      return (
        <div>
          {Object.keys(person).map((key,index) => (
            <p key={index}>
                {console.log(key)}
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
              {person[key]}
            </p>
          ))}
        </div>
      )
}

export default ImKey
