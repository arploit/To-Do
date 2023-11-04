import React from 'react';

const ToDoList = React.lazy(() => import('../../Components/ToDoList'));

const Home = () => {
	return (
		<React.Suspense fallback={<></>}>
			<ToDoList list={[]} />
		</React.Suspense>
	);
};

export default Home;
