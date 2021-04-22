import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('')
    }

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleInputChange}/>
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm
