import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context with Chai aur Code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
    
}

export default App
