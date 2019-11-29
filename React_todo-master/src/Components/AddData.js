import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AddData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            dueDate: '',
            priority: '',
            nameError: '',
            descriptionError: '',
            dueDateError: '',
            priorityError: ''

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validate = () => {
        let nameError = '';
        let descriptionError = '';
        let dueDateError = '';
        let priorityError = '';
        if (this.state.name == "") {
            nameError = "Please Enter Your Name..."
        }
        if (this.state.description == "") {
            descriptionError = "Please Provide Description... "
        }
        if (this.state.dueDate == "") {
            dueDateError = "Please Fill the Date..."
        }
        if (this.state.priority == "") {
            priorityError = "Please Select Your Priority..."
        }

        if (nameError || descriptionError || dueDateError || priorityError) {
            this.setState({ nameError, descriptionError, dueDateError, priorityError })
            return false;
        }
        return true;
    }

    // Function for submit data
    submitHandler = e => {
        e.preventDefault()
        const clear_obj = Object.assign({}, this.state);
        for (let key in clear_obj) {
            clear_obj[key] = ' ';
        }
        const isValid = this.validate();
        if (isValid) {
            axios.post('https://todo-app-apis.herokuapp.com/task', this.state)
                .then(response => {
                    console.log(response.data.success.name)
                    alert("Your Data Is Saved Successfully... ")
                    this.setState(clear_obj);
                    this.props.history.push("/dataList")

                })
                .catch(error => {
                    console.log("Something Went Wrong...");
                })
        }
    }

    render() {
        const { name, description, dueDate, priority } = this.state
        return (
            <div className="ml30">
                <h2 className="mb20">Add Todo Tasks Here...</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label className="control-label col-sm-1">Name:</label>
                        <div className="col-sm-11">
                            <input className="form-control" type="text" placeholder="Enter Your Name..." name="name" value={name} onChange={this.changeHandler} />
                        </div>
                    </div>
                    {this.state.nameError ? (
                        <div className="validationErr">{this.state.nameError}</div>
                    ) : null}

                    <div className="form-group">
                        <label className="control-label col-sm-1">Description:</label>
                        <div className="col-sm-11">
                            <input className="form-control" type="text" placeholder="Provide Your Description..." name="description" value={description} onChange={this.changeHandler} />
                        </div>
                    </div>
                    {this.state.nameError ? (
                        <div className="validationErr">{this.state.descriptionError}</div>
                    ) : null}
                    <div className="form-group">
                        <label className="control-label col-sm-1">Due Date:</label>
                        <div className="col-sm-11">
                            <input className="form-control" type="date" placeholder="Select Date..." name="dueDate" value={dueDate} onChange={this.changeHandler} />
                        </div>
                    </div>
                    {this.state.nameError ? (
                        <div className="validationErr">{this.state.dueDateError}</div>
                    ) : null}
                    <div className="form-group">
                        <label className="control-label col-sm-1">Priority:</label>
                        <div className="col-sm-11">
                            <input className="form-control" placeholder="Provide Your Priority..." type="number" name="priority" value={priority} onChange={this.changeHandler} />
                        </div>
                    </div>
                    {this.state.nameError ? (
                        <div className="validationErr">{this.state.priorityError}</div>
                    ) : null}
                    <button className="btn" type="submit">Submit
                    </button>

                </form>
            </div>
        )
    }

}
export default AddData