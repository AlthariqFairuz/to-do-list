/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <form className='flex flex-wrap justify-center mt-4 mb-4 input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input type='input' ref={inputRef} className='w-1/2 h-10 rounded-lg px-4 focus:shadow-custom transition duration-300 focus:outline-none border-black' placeholder='Enter your task...' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='w-1/6 h-10 right-6 rounded-lg text-white bg-button ml-2 hover:bg-white transition duration-500 hover:scale-105 hover:text-black'> Add </button>
        </form>
    );
};

export default InputField;
