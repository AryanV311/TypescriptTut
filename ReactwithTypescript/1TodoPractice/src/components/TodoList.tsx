import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({todos, setTodos}: Props) {
  return (
    <div className='todos'>
        {
            todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
            ))
        }
    </div>
  )
}

export default TodoList