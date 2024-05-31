import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = s => {
        s.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Update Tugas'
                onChange={(s) => setValue(s.target.value)} />
            <button type='submit' className='todo-btn'>
                Update Tugas
            </button>
        </form>
    )
}
