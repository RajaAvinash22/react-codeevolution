import  { useEffect } from 'react'

function useDoc(count) {

    useEffect(()=>{
        console.log('Updating document.title')
        document.title = `You Clicked ${count} times`
    },[count])

 
}

export default useDoc
