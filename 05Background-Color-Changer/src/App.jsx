import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  // {/* <h1 className='!bg-green-300 text-black p-10 rounded-4xl' >bye! </h1>
  //     <button className='!bg-red-500 '>Red</button> */}

  return (
   <>
      <div className='w-screen h-screen duration-200'
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>

          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl bottom-12'>
            <button onClick={()=>setcolor('red')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"red"}}>red</button> 

            <button onClick={()=>setcolor('green')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"green"}}>green</button>  

            <button onClick={()=>setcolor('yellow')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"yellow"}}>yellow</button>  

            <button onClick={()=>setcolor('blue')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"blue"}}>blue</button>  

            <button onClick={()=>setcolor('purple')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg '
             style={{backgroundColor:"purple"}}>purple</button> 

            <button onClick={()=>setcolor('cyan')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"cyan"}}>cyan</button>  

            <button onClick={()=>setcolor('pink')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"pink"}}>pink</button>  

            <button onClick={()=>setcolor('orange')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"orange"}}>orange</button>  

            <button onClick={()=>setcolor('rteal')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"teal"}}>teal</button>  

            <button onClick={()=>setcolor('indigo')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"indigo"}}>indigo</button>  

            <button onClick={()=>setcolor('violet')} className=' outline-none px-3 py-2 rounded-full text-white shadow-lg ' 
            style={{backgroundColor:"violet"}}>lavender</button>  
          </div>
        </div>
      </div>
      </>
  )
}

export default App
