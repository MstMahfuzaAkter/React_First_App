import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes,setSixes]=useState(0);
    const [ fours,setFours]=useState(0)
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFour=fours+1;
        setRuns(updatedRuns);
        setFours(updatedFour)

    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSix=sixes+1
        setSixes(updatedSix)
        setRuns(updatedRuns)
    }
    return (
        <div className="batsman">
            <h3>Player:Bangladesi</h3>
            <p>Six:{sixes}</p>
            <p>Four:{fours}</p>
            {
                runs > 100 ?
                    <p>Your Score is:100</p>
                    : runs > 50 ?
                        <p>Your score is :50</p>
                        :<p>Your score below 50</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>Six</button>
        </div>


    )

}