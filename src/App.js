import React from "react"
import {connect} from "react-redux"
import {increment,decrement} from "./redux"


function App(props){
    return(
        <div className = 'f1 tc'>
            <h1 >{props.count}</h1>
            <button 
                className = 'b bg-light-green bn f3 ma4 br4 pa4' 
                onClick = {props.decrement}> Decrease  
            </button>
            <button 
                className = 'b bg-light-green bn f3 ma4 br4 pa4' 
                onClick = {props.increment}> Increase  
            </button>
        </div>
    )
}

 function mapStateToProps(globalState){
    return{
        count : globalState
    }
}

const mapDispatchToProps = {
    increment : increment,
    decrement : decrement
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

