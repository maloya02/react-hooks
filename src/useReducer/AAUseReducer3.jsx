import React, { useReducer, useState } from 'react'
import Todo from "./todo"

// const [state, dispatch] = useReducer(first, second, third) 
// snippet

const reducer = (todos, action) => {
    switch(action.type){
        case "Add-todo":
            return [...todos, newTodo(action.payload.name)]
        case "toggle-todo":
            return todos.map(todo => {
                if (todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case "delete-todo":
            return todos.filter(todo => {
                if (todo.id === action.payload.id){
                    return {...todo, complete: !action.payload.id}
                }
                return todos
            })   
        default:
           return todos     

    }
}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false}
}

const AAUseReducer3 = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "Add-todo", payload: {name:name}})
    setName("")
}    

console.log(todos);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='input text here' 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
        </form>
        {todos.map((todo) => {
            return<Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
    </div>
  )
}

export default AAUseReducer3