import {useState} from 'react'
import './App.css';

function App() {
  const [screen, setscreen] = useState("press any button");


  return (
    <div className="App">
      <div className="container">
        <div className="screen">
          <h1>{screen}</h1>
        </div>
        <div className="btns">
          <div className="first">
            <button className="one">A</button>
            <button className="two">S</button>
            <button className="three">D</button>
          </div>
          <div className="sec">
            <button className="four">F</button>
            <button className="five">G</button>
            <button className="six">H</button>
          </div>
          <div className="third">
            <button className="seven">J</button>
            <button className="eight">K</button>
            <button className="nine">L</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
