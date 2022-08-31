import React from 'react';
import './App.css';


// COMPONENTS
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends React.Component{

	render() {
		return (
			<div>
				<NavBar/>
				<ItemListContainer/>
			</div>
		);
	}
}

export default App;
