const AddToDo = (props) => {
	const {onAdd,inputText,setInputText,setError,error} = props

	const handleSubmit = e => {
		e.preventDefault()
		if(!inputText.trim()) {
			return setError('required field *')
		}
		onAdd(inputText)
		setInputText('')
		setError('')
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
				onChange={e => {
					setInputText(e.target.value)
					setError('')
				}} 
				placeholder={error || "+  Add a new to-do"}
				className={error ? "error" : ''}
				/>
			<button >
				+
			</button>
		</div>
	</form>
}

export default AddToDo
