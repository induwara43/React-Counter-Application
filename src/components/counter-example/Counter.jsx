export default function Counter({by,incrementCounter,decrementCounter}){
    return(
        <div className="Counter">
            <div>
                <button className="decrementBtn" onClick={()=>decrementCounter(by)} >-{by}</button>
                <button className="incrementBtn" onClick={()=>incrementCounter(by)} >+{by}</button>
            </div>
        </div>
    )
}