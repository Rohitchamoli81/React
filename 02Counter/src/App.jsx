import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter]=useState(15)
//let counter = 5

const addValue = ()=>{
  // counter=counter+1
  // console.log(Math.random());
  // console.log(`counter ${counter}`);
   if(counter<=20){
    // setcounter(counter)
    // setcounter(counter)
    /* setcounter(counter) as many time only one value will increase because react update in bunch of function so they all are preforming 
    same task . */
    // setcounter(counter)

    // But to update counter value like this we can use callback function which is given bysetcounter
    setcounter(PrevCounter=>PrevCounter+1)
    setcounter(PrevCounter=>PrevCounter+1)
    setcounter(PrevCounter=>PrevCounter+1)
    setcounter(PrevCounter=>PrevCounter+1)
   }
  
}

const removeValue = ()=>{
if(counter>0){
  setcounter(counter-1)
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
