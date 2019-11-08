import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.compoRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }
   
    clickHandler() {
        this.compoRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.compoRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
