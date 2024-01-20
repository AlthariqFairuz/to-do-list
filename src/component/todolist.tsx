import React from 'react';
import Todo from '../model';
import SingleTodo from './singletodo';

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

    return (
        <div className='todos'>
            {todos.map(todo => (
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
};

export default TodoList;
