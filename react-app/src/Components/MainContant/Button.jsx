import React, { useState } from 'react'
import './Button.css'
function Button() {
    const btn = [1,2,3,4,5,6]
    const [selectedvalue , setselectedvalue] = useState()
  return (
   <div>
    <div className='btn'>
      {btn.map((value,index)=>(
        <button className={selectedvalue === value ? "selected" : ""} key={index} onClick={()=>{setselectedvalue(value)}}>{value}</button>
      ))}
    </div>
    <div className="selactnumber">
        <p>Selact Number</p>
    </div>
   </div>
  )
}
export default Button;


