import { useState } from 'react'
import AddToDo from './AddToDo'
import List from './List'

const ToDoList = () => {
    const [error, setError] = useState('')
	const [inputText,setInputText] = useState('')
    const [todos, setTodos] = useState([
        {id: 101, text: 'hello world', completed: false},
        {id: 102, text: 'hello React', completed: false},
        {id: 103, text: 'hello javascript', completed: false}
    ])

    const addTodo = text => {
        setTodos([...todos, {text, completed:false, id:Date.now()}])
    }
    
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleCompleteTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    console.log(todos);

    
    return <div className='todolist'>
        <AddToDo 
            onAdd={addTodo}
            inputText={inputText}
            setInputText={setInputText}
            setError={setError}
            error={error}
        />
        <List
            todos={todos}
            setTodos={setTodos}
            onDelete={deleteTodo}
            onCompleted={handleCompleteTodo}
        />
    </div>
	
}

export default ToDoList
