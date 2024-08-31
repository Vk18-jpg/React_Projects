import React from 'react'

export default function TodoCard( props) {
   const {children, handleDeleteTodos, index, handleEditTodo} = props;
  return (
    <li className='todoItem'>
        {index +1}.
        {children}
        
        <div className='actionsContainer'>
        <button onClick={()=>{
          handleEditTodo(index)
        }}><i class="fa-solid fa-pen-to-square" ></i></button>
        <button onClick={()=>{
          handleDeleteTodos(index)
        }}><i class="fa-regular fa-trash-can"></i></button>

        </div>
    </li>
  )
}
