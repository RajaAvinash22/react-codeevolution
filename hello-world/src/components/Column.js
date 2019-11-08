import React from 'react'

function Column() {
    const items =[
        {id : 1,
            title:'Name1'
    },
    {id : 2,
        title:'Name2'
}
]
  return (
    <React.Fragment>
        {
            items.map(item =>(
                <React.Fragment key ={item.id}>
                    <h2>Title</h2>
                    <p>{item.title}</p>
                    </React.Fragment>

            ))
        }
      <td>Name</td>
      <td>Avinash</td>
    </React.Fragment>
  )
}

export default Column
