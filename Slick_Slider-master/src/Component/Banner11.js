import React, { Component } from 'react'
import axios from 'axios'
class Banner11 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
        
    }
    componentDidMount() {
        axios.get('https://todo-app-apis.herokuapp.com/task')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                this.setState({ errorMsg: "Error Retriving data" })
            })
    }

    render() {
        const { posts, errorMsg } = this.state;
        
        return (
            <div>
                {
                    posts.length ?
                posts.map(post => <div key={post._id}>{post.title} {post.name}</div>) :
                        null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default Banner11
