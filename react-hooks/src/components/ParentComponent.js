import React,{useState, useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(25000)

    const increementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])
    const increementSalary =   useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])

  return (
    <div>
      <Title />
      <Count text ="Age" count={age} />
      <Button handleClick={increementAge}>Increement Age</Button>
      <Count text ="Salary" count={salary} />
      <Button handleClick={increementSalary}>Increement Salary</Button>
      
   
    </div>
  )
}

export default ParentComponent;
