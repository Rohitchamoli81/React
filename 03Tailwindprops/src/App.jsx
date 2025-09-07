import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

// const myobj={
//   nme:"Rohit Chamoli"
// }

// myarr = [1,2,3]

function App() {
  return (
    <>
   <h1 className='bg-green-300 text-black p-10 rounded-4xl' >TailWind Test </h1>
   <Card username = "Rohit" BtnText="Click me " />
   <Card username="Ankit" />
   <Card username="Noisy Pirate" />
    </>
  )
}

export default App
