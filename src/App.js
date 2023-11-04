import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import './App.css';

function App() {
	return <RouterProvider router={router} fallbackElement={<></>} />;
}

export default App;
