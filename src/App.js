import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement} from "./redux"


function App(props){
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return(
        <div className = 'f1 tc'>
            <h1 >{count}</h1>
            <button 
                className = 'b bg-light-green bn f3 ma4 br4 pa4' 
                onClick = {()=>dispatch(decrement())}> Decrease  
            </button>
            <button 
                className = 'b bg-light-green bn f3 ma4 br4 pa4' 
                onClick = {()=>dispatch(increment())}> Increase  
            </button>
        </div>
    )
}

export default App

