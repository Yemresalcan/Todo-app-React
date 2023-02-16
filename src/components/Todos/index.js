import React, { useState } from 'react'
import Add from '../Add'
import Clear from '../Clear'
import List from '../List'
import './style.css'

function Todos() {
    const data = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    const [todos, setTodos] = useState(data);
    const [isFilter, setisFilter] = useState(false);


  return (
    <div>
         <div id='alltodo'>
      <h1 id='alltodoh1'>TODO LİST</h1>
        <Add todos={todos} setTodos={setTodos} data={data}/>
        <List todos={todos} setTodos={setTodos} isFilter={isFilter} />
        <Clear todos={todos} setTodos={setTodos} setisFilter={setisFilter}/>
    </div>
    </div>
  )
}

export default Todos
