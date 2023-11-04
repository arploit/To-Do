import React from 'react';
import CreateATask from '../CreateATask';

const ToDoList = ({ list = [] }) => {
	if (list.length === 0) {
		return <CreateATask />;
	} else {
		return (
			<>
				<ul>
					{list.map((listItems) => (
						<li>{listItems}</li>
					))}
				</ul>
			</>
		);
	}
};

export default ToDoList;
