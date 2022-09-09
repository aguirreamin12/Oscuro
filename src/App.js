// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/navBar';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer/>}/>
					<Route path='/category/:id' element={<ItemListContainer/>}/>
					<Route path='/detail/:id' element={<ItemDetailContainer />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
