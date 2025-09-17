import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const CounterStyle = {
        border: '2px solid red'
    }
    const handleAdd = () => {
        //console.log('Add button');
        //setCount(4);
        const newCount=count+1;
        setCount(newCount)

    }
    return (
        <div style={CounterStyle}>
            <h2>Count:{count}</h2>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}