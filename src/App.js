import * as Tone from 'tone'
import './App.css';

export default function App() {
  const synth = new Tone.Synth().toDestination();
  function playnote(note){
    synth.triggerAttackRelease(`${note}4`,'8n');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="btns">
          <div className="first">
            <button className="one" onClick={()=> playnote("C")}>C</button>
            <button className="two" onClick={()=> playnote("E")}>E</button>
            <button className="three" onClick={()=> playnote("D")}>D</button>
          </div>
          <div className="sec">
            <button className="four" onClick={()=> playnote("A")}>A</button>
            <button className="five" onClick={()=> playnote("G")}>G</button>
            <button className="six" onClick={()=> playnote("B")}>B</button>
          </div>
          <div className="third">
            <button className="seven" onClick={()=> playnote("F")}>F</button>
            <button className="eight" onClick={()=> playnote("E")}>E</button>
            <button className="nine" onClick={()=> playnote("C")}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}
