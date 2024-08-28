const AddToDo = (props) => {
	const {onAdd,inputText,setInputText} = props

	const handleSubmit = e => {
		e.preventDefault()
		if(inputText.trim()) {
			onAdd(inputText)
			setInputText('')
		}
	}
	
	return <form onSubmit={handleSubmit} className="form">
		<div>
			<h1>
				TODO LIST 🗒️
			</h1>
		</div>
		<div className="form_block">
			<input 
				type="text" 
				value={inputText} 
				onChange={e => setInputText(e.target.value)} 
				placeholder="+  Add a new to-do"
				/>
			<button >
				Add todo
			</button>
		</div>
	</form>
}

export default AddToDo
