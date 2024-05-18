import './unidata.css'
import axios from 'axios'
import { useState, useEffect  } from 'react'
import location from './assets/location.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import detaildata from './detaildata.jsx'



function Unidata() {
 
   const [userData , setdata] = useState([]);
   {        
      useEffect(()=>{
       axios.get('http://localhost:3000/datas')
       .then((Response)=>{
         console.log(Response)
        setdata(Response.data)
       
       }) 
      },[])
       
   } 
    
    return (
           
              <div >

               <div className='dataheader'>
                    <p className='rank'>Rank</p>
                    <p className='heading'> University</p>
                    <p className='location'>Location</p>
                    
               </div>
                 <div className="scrolldiv">
                 {userData.map(
                  (data)=>{
                     return(
                        
                        <div key={data._id} className='data'>
                         
                           <p className='datarank'>{data.rank}</p>
                           <img  src={`../logo_imgs/${data.image_name}.jpg `} alt="logo" className='logos' />
                           <div className='dataname'>
                           <h3 >{data.name}</h3>
                           <p className='region'>Region:{data.region}</p>
                           </div>
                           <div className="btndiv">
                           <button className='btn' ><NavLink to="/Detaildata">More Details</NavLink></button>
                           </div>
                           <div className="locationdiv">
                              <img src={location} alt="location" height={20} width={20}/>
                           </div>
                           <div className="locationtext">
                              <p>{data.location}</p>
                           </div> 
                          
                        </div>
                        )
                  
                     }
                )}
                </div>

              </div> 
    )
  }
  export default Unidata