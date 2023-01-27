import React, {useState} from "react"

const Counter = function (){
    const [count, setCount] = useState(0)
    function Increcement(){
        setCount(count+1)
    
      }
      function Decrecement(){
        setCount(count-1)
      }
    return (
    <div>
        <h1>{count}</h1>
      <button onClick={Increcement}>Increcement</button>
      <button onClick={Decrecement}>Decrecement</button>
    </div>)
}

export default Counter