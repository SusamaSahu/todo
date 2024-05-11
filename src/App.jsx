import React, { useState } from 'react'
import Addtodo from './componet/Addtodo'
import Additems from './componet/Additems'
import './App.css'
import { Todoitems } from './store/Contex'


const App = () => {
  
  const [todoitem,Settodoitem]=useState([])
const handleadd=( name,date)=>{
const newitem=[...todoitem,{name:name,date:date}]
Settodoitem(newitem)
 
}
const handledelete=(name)=>{
  const fil=todoitem.filter((value)=>value.name!==name)
  Settodoitem(fil)
  

}
  return (
    <div className="app d-flex flex-column   p-4  align-items-center  justify-content-center  ">
    <Todoitems.Provider value={{ todoitem ,handleadd,handledelete}} >
    <div className="container">
    <Addtodo  />
    <Additems   />
    </div>
    </Todoitems.Provider>
    </div>
  )
}

export default App