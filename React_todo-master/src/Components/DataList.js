import React, {Component} from 'react'
import axios from 'axios'
class DataList extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts: [],
            errorMsg:'',
            search: ''
        }
        this.onchange = this.onchange.bind(this)
        this.onSort = this.onSort.bind(this)
    }
    
    onSort(event, sortKey){
        const data = this.state.posts;
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({data})
      }

    onchange = (e) => {
        this.setState({ search: e.target.value });
        }

    componentDidMount(){
        axios.get('https://todo-app-apis.herokuapp.com/task')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(error => {
            this.setState({errorMsg: "Error Retriving data"})
        })
    }

    deleteData(id){
        axios.delete(`https://todo-app-apis.herokuapp.com/task/${id}`)
        .then(response => {
            this.setState({posts: response.data})
            alert("Data Removed !")
        })
        .catch(error => {
            alert("Data not removed")
        })

    }
    handleEdit = (id) => {
        console.log( this.props)
        this.props.history.push(`/updateData/${id}`)
        
        // this.setState({ userName: name , userDescription: description , userDate: dueDate, userPrio: priority });
        // axios.put(`https://todo-app-apis.herokuapp.com/task/${id}`, {
        //     name: this.state.name,
        //     description: this.state.description,
        //     dueDate: this.state.dueDate,
        //     priority: this.state.priority
        // })
        //   .then(response => {
        //     this.setState({ posts: response.data });
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      }
     

    render(){
        const { search } = this.state;
        const {posts , errorMsg} = this.state

        const filteredClients = posts.filter( post =>{
            return post.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
            })

        return(
            <div className="ml30 scrl"> 
            <input onChange={this.onchange} type="search" className="form-control" placeholder="Search your name here..."/>
              
                <table className="scrl">
                    <thead>
                    <tr>
                    <th onClick={e => this.onSort(e, 'name')}>Name</th> 
                    <th onClick={e => this.onSort(e, 'description')}>Description</th>
                    <th onClick={e => this.onSort(e, 'dueDate')}>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                    </thead> 
                    </table>
                {
                    filteredClients.length ?
                    filteredClients.map((post, index) => 
                        <tr key={post._id} >
                        <td>{post.name}</td>
                        <td>{post.description}</td>
                        <td>{post.dueDate}</td>
                        <td>{post.priority}</td>
                        <td><button className="btn btn-sm">Active</button></td>
                        <button className="btn-primary btn-sm" onClick={() => this.handleEdit(post._id, post.name, post.description, post.dueDate, post.priority)}>Edit</button>
                        <td><button className="btn-danger btn-sm" onClick={ () => this.deleteData(post._id) }>Remove</button></td>
                        </tr>
                        
                    ) : null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
                </div>
        )
    }

    

}
export default DataList