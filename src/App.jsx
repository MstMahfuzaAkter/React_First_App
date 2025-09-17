import counter from './counter'
import './App.css'
import Counter from './counter'
import Batsman from './batsmans'
import baller from './baller'
import Baller from './baller'

function App() {
  function handleClick() {
    alert("ok")
  }
  const handleClick3 = () => {
    alert("clicked 3")
  }
  const handleAdd = (num) => {
    const numNew = num + 5;
    alert(numNew);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Baller></Baller>
      <Batsman></Batsman>
      <Counter count></Counter>
      <button onClick={handleClick}>CLick me</button>
      <button onClick={handleClick3}>click me 3</button>
      <button onClick={() => handleAdd(10)}>ADD</button>
    </>
  )
}

export default App
