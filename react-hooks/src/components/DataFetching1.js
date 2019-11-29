import React ,{useState,useEffect}from 'react'
import axios from 'axios'
function DataFetching1() {
  const [loading, setloading]= useState(true) 
  const [error, setError]= useState('')
  const [post,setPost] = useState({})

  useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(response =>{
        setloading(false)
        setPost(response.data)
        setError('')
    })
    .catch(error =>{
        setloading(false) 
        setPost({})
        setError('Something Went Wrong')
    })
  },[])
  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error:null}
    </div>
  )
}

export default DataFetching1
