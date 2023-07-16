
import { useState } from 'react';
import './App.css';
//import Button from './components/buttons';
import OutputField from './components/output'

function App() {
  const [output, setOutput] = useState("")

  return (
    <>
      <div style={{backgroundColor:"black",padding:10,borderLeft:'5px solid black', borderRight:'5px solid black', border:'5px solid black', width:300,paddingLeft:20,}} className="App">
        <header className="Calculator">
          <p style={{color:'white'}}>
            Simple calculator 
          </p>
        </header>
        <OutputField value={output}/>
        <div style={{backgroundColor:'black', width:300, height:350}}>
        <div style={{ display: 'inline-block', flexDirection: 'column',position:'relative', paddingTop:5}}>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'ash', backgroundColor: 'ash', borderRadius: 50,fontSize:25,}} onClick={e => setOutput('')}> AC </button> </div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50, fontSize:30}} value={7} onClick={e => setOutput(output + e.target.value)}>7</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={4} onClick={e => setOutput(output + e.target.value)}>4</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={1} onClick={e => setOutput(output + e.target.value)}>1</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 115, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50, fontSize:30}} value={0} onClick={e => setOutput(output + e.target.value)}>0</button> </div>
        </div>
        <div style={{ display: 'inline-block', flexDirection: 'column', position:'relative', top:'-65px',right:'50px'}}>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'ash', backgroundColor: 'ash', borderRadius: 50,fontSize:25 }} onClick={e => setOutput(output.slice(0, -1))}> DE </button> </div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={8} onClick={e => setOutput(output + e.target.value)}>8</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={5} onClick={e => setOutput(output + e.target.value)}>5</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={2} onClick={e => setOutput(output + e.target.value)}>2</button></div>
        </div>
        <div style={{ display: 'inline-block', flexDirection: 'column', position:'relative',right:'40px' }}>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'ash', backgroundColor: 'ash', borderRadius: 50,fontSize:30 }} value={'*1/100'} onClick={e => setOutput(output + e.target.value)}> % </button> </div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={9} onClick={e => setOutput(output + e.target.value)}>9</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={6} onClick={e => setOutput(output + e.target.value)}>6</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={3} onClick={e => setOutput(output + e.target.value)}>3</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'grey', borderRadius: 50,fontSize:30 }} value={'.'} onClick={e => setOutput(output + e.target.value)}>.</button></div>
        </div>
        <div style={{ display: 'inline-block', flexDirection: 'column', position:'relative',right:'30px' }}>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'orange', borderRadius: 50,fontSize:30 }} value={'/'} onClick={e => setOutput(output + e.target.value)}> / </button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'orange', borderRadius: 50,fontSize:30 }} value={'*'} onClick={e => setOutput(output + e.target.value)}>x</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}> <button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'orange', borderRadius: 50,fontSize:30 }} value={'-'} onClick={e => setOutput(output + e.target.value)}>-</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'orange', borderRadius: 50,fontSize:30 }} value={'+'} onClick={e => setOutput(output + e.target.value)}>+</button></div>
          <div style={{ paddingRight: 5, paddingTop: 5, paddingBottom: 5 }}><button style={{ width: 55, height: 55, color: 'white', backgroundColor: 'orange', borderRadius: 50,fontSize:30 }} value={'='} onClick={e => setOutput(eval(output))}>=</button></div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
