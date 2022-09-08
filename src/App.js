// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';

// VIEWS
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<ItemListContainer/>
				<Routes>
					<Route path='/detail/:id' element={<ItemDetailContainer />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
