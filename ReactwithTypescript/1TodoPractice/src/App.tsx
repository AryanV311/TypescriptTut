import { useState } from 'react'
import InputField from './components/InputField'
import './index.css'
import { Todo } from './model';
import TodoList from './components/TodoList';

function App() {

  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])

  const handleTodo = (e:React.FormEvent) => {
    e.preventDefault();

    if(input){
      setTodos([...todos, {id:Date.now(), todo:input, isDone:false}])
      setInput("");
    }

    console.log(todos);
  }

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField input={input} setInput={setInput} handleTodo={handleTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
