import './detaildata.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect  } from 'react'
import bgimage from './assets/R.png'


export const Detaildata = () => {
 
  const [ detaildata , setdetaildata] = useState([]);

  
  {        
    useEffect(()=>{
      
     axios.get('http://localhost:3000/detaildatas')
     .then((Response)=>{
       console.log(Response)
       setdetaildata(Response.data)
     
     
     }) 
    },[]) 
 }




  return (
    <div>
       <div className="bgimage">
        <img src={bgimage} alt="background image" height={300} width={1466} />
       </div>
      
    </div>
  )
}
export default Detaildata
  