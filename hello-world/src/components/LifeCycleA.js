import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Avinash '
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }
  changeState = () => {
    this.setState({
      name: 'KumarDas'
    })
  }
  render() {
    console.log('Lifecycle A render')
    return (

      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>ChangeState</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
