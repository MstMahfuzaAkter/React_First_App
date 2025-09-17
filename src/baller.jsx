import { useState } from "react"

export default function Baller(){
    const[balls,setBalls]=useState(0)
    const handleBalls=()=>{
        const updatedball=balls+1;
        setBalls(updatedball)
    }
    return(
        <div className="ballerman">
           <h3>Player:Baller</h3>
           <h4 >Score:{balls}</h4>
           <button onClick={handleBalls}>Count Ball</button>
        </div>
    )
}