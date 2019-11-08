import React from 'react'
import PesrsonList from './PersonList'
const NameList = () => {
        const names = ['Avinash','Kumar','Das','Avinash']
        const nameList =  names.map((name,index) => <h2 key = {index}> {index} {name}</h2>)
      return (
        <div>
          {
             nameList
          }
        </div>
      )
    // const persons = [
    //     {
    //         id : 1,
    //         name:'Vikas',
    //         age:32,
    //         skill:'React'
    //     },
    //     {
    //         id : 2,
    //         name:'Kalle',
    //         age:42,
    //         skill:'ReactNative'
    //     }
    // ];
    // const personList =  persons.map(person => (
    //     <PesrsonList key = {person.id} person={person}/>

    //     ))
    //     return <div>{personList}</div>
}

export default NameList
