import React, { useEffect } from 'react';
import Todo from '../model';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

    const handleEdit = (e?: React.FormEvent<HTMLFormElement>, id?: number) => {
        e?.preventDefault();
        if (id !== undefined) {
            if (editTodo.trim() === '') {
                handleDelete(id);
            } else {
                setTodos(todos.map((todo) => {
                    return todo.id === id ? { ...todo, todo: editTodo } : todo
                }))
            }
        }
        setEdit(false);
    };


    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {
                ...todo, isCompleted: !todo.isCompleted
            } : todo
        }))
    };

    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [edit])

    return (
        <div className='flex justify-center w-full' data-aos='fade-up' data-aos-duration='500' data-aos-offset='200' data-aos-delay="0">
            <form className='todos-single w-1/2 flex justify-center items-center mb-4 group' onSubmit={(e) => handleEdit(e, todo.id)}>
                {
                    edit ? (
                        <input ref={inputRef} onBlur={() => {
                            handleEdit(undefined, todo.id);
                            setEdit(false);
                        }} className='p-3 focus:outline-none focus:shadow-custom w-full flex justify-center items-center rounded-lg bg-todos transition duration-300' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                    ) : (
                        todo.isCompleted ? (
                            <span onClick={() => {
                                if (!edit && !todo.isCompleted) {
                                    setEdit(!edit);
                                }
                            }} className='p-3 group-hover:scale-105 w-full flex justify-center items-center rounded-lg bg-todos line-through duration-300 transition h-12 truncate' >
                                {todo.todo}
                            </span>
                        ) : (
                            <span onClick={() => {
                                if (!edit && !todo.isCompleted) {
                                    setEdit(!edit);
                                }
                            }} className='p-3 group-hover:scale-105 w-full flex justify-center items-center rounded-lg bg-todos h-12 duration-300 transition truncate' >
                                {todo.todo}
                            </span>
                        )
                    )
                }

                <div className='flex static p-6  '>
                    <span className='icon hover:text-white group-hover:scale-125 transition duration-300' onClick={() => {
                        if (!edit && !todo.isCompleted) {
                            setEdit(!edit);
                        }
                    }}> <FaEdit /></span>
                    <span className='icon hover:text-white group-hover:scale-125 transition duration-300' onClick={() => handleDelete(todo.id)}><MdDelete /></span>
                    <span className='icon hover:text-white group-hover:scale-125 transition duration-300' onClick={() => handleDone(todo.id)}><MdDoneAll /></span>
                </div>
            </form >
        </div >
    );
};

export default SingleTodo;
