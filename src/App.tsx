// import React from 'react'
import { useState, useEffect } from 'react'
import InputField from './component/inputfield'
import Todo from './model'
import './index.css'
import TodoList from './component/todolist';

function App() {

  const [todo, setTodo] = useState<string>(() => {
    const savedTodo = localStorage.getItem('todo');
    return savedTodo ? savedTodo : "";
  });

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem('todo', todo);
  }, [todo]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: todos.length + 1, todo: todo, isCompleted: false }])
      setTodo("");
    }
  }

  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App
