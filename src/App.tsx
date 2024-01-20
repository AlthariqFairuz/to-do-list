// import React from 'react'
import { useState } from 'react'
import InputField from './component/inputfield'
import './index.css'
import Todo from './model';
import TodoList from './component/todolist';

function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: todos.length + 1, todo: todo, isCompleted: false }])
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className='flex flex-wrap justify-center mt-8 font-bold w-full font-comic-neue text-white lg:text-3xl'> AmbatuTask </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App
