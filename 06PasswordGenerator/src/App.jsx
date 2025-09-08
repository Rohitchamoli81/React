import { useState ,useCallback ,useEffect ,useRef } from 'react'

function App() {
  const[length,setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] =useState('')

  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange({length})
    window.navigator.clipboard.writeText(password)
  },[password])

  //useRef hook

  let passwordRef = useRef(null)

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllowed,charAllowed,passwordgenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-6 ">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black rounded-lg text-center '
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
           <button className='mx-3 bg-blue-400 text-white px-2 rounded-lg outline-none cursor-pointer hover:bg-blue-600 hover:scale-105' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-2 px-2'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
             <label>Number</label>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='CharInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            
            />
            <label >Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
