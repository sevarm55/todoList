import ToDoItem from "./ToDoItem"

const List = (props) => {
	const {todos,onDelete,onCompleted} = props
	return <div className="list">
		{
			todos.map(todo => 
				<ToDoItem 
					todo={todo} 
					key={todo.id} 
					onDelete={onDelete} 
					onCompleted={onCompleted} 
				/>)
		}
	</div>
}

export default List