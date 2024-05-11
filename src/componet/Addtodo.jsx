import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Todoitems } from '../store/Contex';
const Addtodo = () => {
    const {handleadd}=useContext(Todoitems);
    const [name,Setname]=useState("");
    const[date,Setdate]=useState("")
const handlename=(event)=>{
    Setname(event.target.value)
    
}

const handleDate=(e)=>{
    Setdate(e.target.value)
}

    const handlebtn=()=>{
        handleadd(name,date)
        Setname("");
        Setdate("")
    }
  return (
    <div className=' addtodo row  g-2   d-flex  justify-content-evenly      '>
    <div className=' col-4  rounded-5 '>
    <input   className=' rounded-5  p-2 '  type="text" placeholder='Add Todo...'  value={name}  onChange={handlename} />
    </div>
        
        <div className=' col-4  '>
        <input   className=' rounded-5 p-2 ' type="date" value={date}  onChange={handleDate}/>
        </div>
        <div className='col-3  px-2  ' >
        <button className='btn btn-success px-4 text-uppercase  ' onClick={handlebtn} >add</button>
        </div>
        
    </div>
  )
}

export default Addtodo