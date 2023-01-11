import React from 'react';
import '../index.css'
function Header({setId}) {
    const OnWrite=(id)=>{
      setId(id)

    }
  return (
    <div className='flex justify_center'>
    <input type="number" onChange={(e)=>{OnWrite(e.target.value)}} placeholder='Please write the product that you want to search' />
    </div>
  )
}

export default Header