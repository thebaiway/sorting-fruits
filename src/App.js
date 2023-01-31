import './App.css';
import React, {useState} from 'react'

function App() {

 

  const [apple, setApple] = useState([""])

  const [orange, setOrange] = useState([""])

 function test() {
  let fruit = ["🍎", "🍊", "🍎", "🍎", "🍎", "🍊", "🍎", "🍎", "🍊", "🍊"]

  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
       setApple(prevApple => prevApple += "🍎") 
    } else if (fruit[i] === "🍊") {
       setOrange(prevOrange => prevOrange += "🍊")
    }
  }
}
  return (
    <div className="App">
        <h1>Apples & Oranges</h1>
        <p>🍎🍊🍎🍎🍎🍊🍎🍎🍊🍊</p>
        <button onClick = {test} >Click Here To Sort Fruit!</button>
        <div className = "apple-shelf">{apple}</div>  
        <div className = "orange-shelf">{orange}</div>
    </div>
  );
}

export default App;
