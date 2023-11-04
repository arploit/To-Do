import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		loader: () => ({ message: 'Hello Data Router!' }),
		Component() {
			return <Home />;
		},
	},
	{
		path: '/home',
		loader: () => ({ message: 'Hello Data Router!' }),
		Component() {
			return <Home />;
		},
	},
]);

export default router;
