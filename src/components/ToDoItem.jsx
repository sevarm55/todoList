const ToDoItem = (props) => {
	const { todo,onDelete,onCompleted } = props
	return (
		<div className={`todoItem ${todo.completed ? 'done' : ''}`}>
			<div className="items">
				<button onClick={() => onCompleted(todo.id)}>{todo.completed ? "✓" : ""}</button>
				<p>{todo.text}</p>
			</div>
			<div className="actions">
				<button onClick={() => onDelete(todo.id)}>x</button>
			</div>
		</div>
	)
}

export default ToDoItem
