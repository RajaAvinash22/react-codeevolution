import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.handleChange}>Click{count} times </button>
            </div>
        )
    }
}

export default ClassCounter
