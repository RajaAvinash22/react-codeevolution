import React from 'react'

const withCounter =(WrappedComponent,increement) =>{
    class withCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
            this.increementCount=this.increementCount.bind(this)
        }
        increementCount(){
            this.setState(prevState =>{
                return{count: prevState.count +increement}
            })
        }
        render(){
            return <WrappedComponent count ={this.state.count} {...this.props}
            increementCount={this.increementCount}/>
        }
    }
    return withCounter

}
export default withCounter