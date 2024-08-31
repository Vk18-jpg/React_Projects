import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos,todoValue, setTodoValue} =props
 
  return (
    <header>
        <input  value={todoValue} onChange={(e) => {
          setTodoValue(e.target.value)
        }}placeholder='Enter here...'  onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodos(todoValue)
          setTodoValue('')  // Trigger the addTodo function when Enter key is pressed
          }}}/>
        <button onClick={()=>{
          handleAddTodos(todoValue)
          setTodoValue('')
        }}>Add</button>
    </header>
  )
}
