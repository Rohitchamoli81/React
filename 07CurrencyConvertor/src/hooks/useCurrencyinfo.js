import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const[data,setdata] = useState({})
    useEffect(()=>{
      fetch(`https://v6.exchangerate-api.com/v6/0cd83e354b12a2a0b0869c8d/latest/${currency}`)
      .then((res)=>res.json())
      .then((res)=>{setdata(res.conversion_rates)})
      .catch(()=>{
        console.log(`Error fetching data `);
        
      })
    },[currency])

    return data    
}


export default useCurrencyInfo;