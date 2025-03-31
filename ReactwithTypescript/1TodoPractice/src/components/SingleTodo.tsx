import React, { useState } from "react";
import { Todo } from "../model";
import { MdDelete, MdDone, MdEdit } from "react-icons/md";
import "../index.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function SingleTodo({ todo, todos, setTodos }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditSubmit = (e: React.FormEvent, id:number) => { 
    e.preventDefault();
    setTodos(todos.map((todo) => (
        todo.id === id ? {...todo, todo:editTodo} : todo
    )))

    setIsEdit(false)
  }

  return (
    <form className="todo-single" onSubmit={(e) => handleEditSubmit(e, todo.id)}>
      {isEdit ? (
        <input className="input_edit" type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      ) : todo.isDone ? (
        <s className="todo-singleText">{todo.todo}</s>
      ) : (
        <span className="todo-singleText">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!isEdit && !todo.isDone) {
              setIsEdit(!isEdit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span className="icon" onClick={() => handleDeleteTodo(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
