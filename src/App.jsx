import counter from './counter'
import './App.css'
import Counter from './counter'
import batmans from './batsmans'
import Batmans from './batsmans'
import Batsman from './batsmans'

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
      <Batsman></Batsman>
      <Counter count></Counter>
      <button onClick={handleClick}>CLick me</button>
      <button onClick={handleClick3}>click me 3</button>
      <button onClick={() => handleAdd(10)}>ADD</button>
    </>
  )
}

export default App
