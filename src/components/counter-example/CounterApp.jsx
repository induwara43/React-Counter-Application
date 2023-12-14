import * as React from 'react';
import './CounterApp.css'
import Counter from './Counter'

export default function CounterApp(){

    const [count,setCount] = React.useState(0)
    function incrementCounter(by){
        setCount(count + by)
    }
    function decrementCounter(by){
        if(count>0)
        setCount(count - by)
    }
    function resetCounter(){
        setCount(0)
    }
    return(
        <>
            <span>{count}</span>
            <Counter by={1} incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>
            <Counter by={2} incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>
            <Counter by={5} incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>
            <div>
            <button className="resetBtn" onClick={resetCounter} >Reset</button>
            </div>
        </>
    )
}


