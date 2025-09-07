import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
//let counter = 5

const addValue = ()=>{
  counter=counter+1
  // console.log(Math.random());
  // console.log(`counter ${counter}`);
   if(counter<=20){
    setcounter(counter)
   }
  
}

const removeValue = ()=>{
  counter=counter-1
if(counter>=0){
  setcounter(counter)
}
}

  return (
    <>
    <h1>Morning Tea</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>Add value{counter}</button>
    < br />
    <button onClick={removeValue}>Remove Value{counter}</button>
    <p>{counter}</p>
    </>
  )
}

export default App
