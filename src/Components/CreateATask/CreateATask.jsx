import React, { useState } from 'react';

const CreateATask = () => {
	const [taskCreationToggle, setTaskCreationToggle] = useState(false);
	const [value, setValue] = useState('');

	const onCreateATaskClick = () => {
		setTaskCreationToggle(!taskCreationToggle);
	};

	const onInputValueChange = (e) => {
		setValue(e.target.value);
	};

	const createATask = () => {
		console.log(value);
	};
	return !taskCreationToggle ? (
		<>
			<div>Create your own Task</div>
			<button onClick={onCreateATaskClick}>Create a Task</button>
		</>
	) : (
		<>
			<input
				type="text"
				value={value}
				placeholder="Add your task"
				onChange={(e) => onInputValueChange(e)}
			/>
			<button onClick={createATask}>Create</button>
		</>
	);
};

export default CreateATask;
