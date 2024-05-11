import React from 'react'
import Items from './Items'
import { useContext } from 'react'
import { Todoitems } from '../store/Contex'

const Additems = () => {
    const {todoitem}=useContext(Todoitems)
   
  return (<>
{
    todoitem.map((item,i)=>(
 <Items  key={i} name={item.name} date={item.date} />

    ))
}

    
    </>
  )
}

export default Additems