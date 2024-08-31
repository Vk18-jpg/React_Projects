import React, { useState } from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos}=props
    console.log(todos)
    // let [todos, useTodos]=useState()
  return (
    <ul className='main'>
        {todos.map((todos,todoIndex) => {
            return(
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todos}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
