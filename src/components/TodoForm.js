import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

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
            { props.edit ? ( <>
            <input ref={inputRef} type="text" placeholder="Update your Item" value={input} name="text" className="todo-input edit" onChange={handleInputChange}/>
            <button className="todo-button edit">Update</button> 
            </> 
            ) : ( <>
                <input ref={inputRef} type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleInputChange}/>
                <button className="todo-button">Add todo</button>) </> )
        }
            
        </form>
    )
}

export default TodoForm
