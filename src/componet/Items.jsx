import React, { useContext } from 'react'
import { Todoitems } from '../store/Contex'

const Items = ({name,date}) => {
    const {handledelete}=useContext(Todoitems)
  return (
    <div className=' item row g-1 d-flex justify-content-evenly '>
<div className="col-4 text-capitalize ">{name}</div>
<div className="col-4">{date}</div>
<div className='col-3'>
<button className='btn btn-danger px-3 text-uppercase ' onClick={()=>handledelete(name)}>delete</button>
  </div>
    </div>
  )
}

export default Items