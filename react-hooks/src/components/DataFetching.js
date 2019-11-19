import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    // for getting all posts
    // const [posts, setPosts] = useState([])

    // for getting post with id
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    // for getting result on button
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                // setPosts(res.data)
                setPost(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button'onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }</ul> */}
        </div>
    )
}

export default DataFetching
