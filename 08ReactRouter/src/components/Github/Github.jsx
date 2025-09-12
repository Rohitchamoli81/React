import React, { useEffect, useState  } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const[data,setdata] =useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
            
    //         setdata(res)})
    // },[])

  return (
    <div>
      <h1 className='text-center'>Followers: {data.followers
} </h1>
    </div>
  )
}

export default Github

export const GithubInfoloader= async()=>{
const res = await fetch('https://api.github.com/users/hiteshchoudhary')
return res.json()
    
}
