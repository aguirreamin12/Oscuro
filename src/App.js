import React from 'react';
import './App.css';


// COMPONENTS
import NavBar from './components/navBar/navBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


class App extends React.Component{

	render() {
		return (
			<div>
				<NavBar/>
				<ItemDetailContainer/>
			</div>
		);
	}
}

export default App;
