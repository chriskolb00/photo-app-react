import React, { useState } from 'react'
import AboutPhoto from './AboutPhoto';

export default function Photos(props) {
  
  const item = props.item;
  const [show, setShow ]= useState(false)
  const toggleShowBox =()=>{
    setShow(!show)
  }
  return (
    <div className='flex flex-row'>
    {
      item ? ( 
      <div className='' onClick={toggleShowBox}>
        <img src={show?item.src?.portrait: item.src?.medium} alt={item.alt} 
        className='flex items-center border-md rounded-md w-[95%] h-[auto] m-2'/>
        </div> )
      :
      ""
    }
    {
      show? 
      <AboutPhoto item={item} toggle={toggleShowBox}/>
      : ""
    }
    </div>
  )
}
