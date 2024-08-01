import React from 'react';
import {useState} from 'react';


function App() {
  const [result,setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  }

  const clear = () =>{
    setResult("");
  }
 const evaluate = () => {setResult(eval(result).toString());
 }

  return (
    <>
      <h1 className = "text-center">Calculator</h1>
      <div className = "d-flex flex-wrap btn btn-dark w-25 h-50 mx-auto">
      <input type ="text" id = "anwser" placeholder="0" value={result} className = "w-100" />
      
      <input readOnly type ="button" value = "9" onClick = {clickHandler} className ="col-sm-3"/>
      <input readOnly  type ="button" value = "8" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "7" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "6" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "5" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "4" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "3" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "2" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "1" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "0" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "." onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "+" onClick = {clickHandler} className ="col-3"/>
      <input readOnly   type ="button" value = "-" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "*" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "/" onClick = {clickHandler} className ="col-3"/>
      <input readOnly  type ="button" value = "%" onClick = {clickHandler} className ="col-3"/>
      <input readOnly   type ="button" value = "Clear" id="clear" onClick = {clear} className = "w-50" />
      <input readOnly   type ="button" value = "=" onClick = {evaluate} id="equal" className = "w-50"  />
  
      </div>
    </>
  );
}

export default App;
