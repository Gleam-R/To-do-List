import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const handleSubmit = s => {
        s.preventDefault();
        addTodo(value)
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Tugas Apa Hari ini?'
                onChange={(s) => setValue(s.target.value)} />
            <button type='submit' className='todo-btn'>
                Tambah Tugas
            </button>
        </form>
    )
}
