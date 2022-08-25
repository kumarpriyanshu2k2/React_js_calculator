import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

function App() {
    const [calc, setcalc] = useState("");
    const [result, setresult] = useState("");

    const ops=['/','-','+','*','.'];
    const updateCalc = value =>{
      setcalc(calc+value);
    }
  const createDigits= ()=>{
    var digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>
      )
    }

        return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
      <div className="display">
        {result? <span>0</span>:""}
        {calc||"0"}
      </div>
      <div className="operators">
        <button onClick={()=>updateCalc('+')}>+</button>
        <button onClick={()=>updateCalc('*')}>*</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={()=>updateCalc('/')}>/</button>
        <button>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={()=>updateCalc('=')}>=</button>
        </div>
    </div>
    </div>
  );
}

export default App;
