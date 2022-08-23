import React, { Component } from 'react';
import './App.css';

// IMAGENES
import Remera1 from './img/remeras/dorso.png'
import Remera2 from './img/remeras/Remera-Dorso.png'
import Remera3 from './img/remeras/SALW-DORSO.png'

// COMPONENTS
import NavBar from './components/navBar/navBar';
import CardComponent from './components/CardComponent/CardComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends React.Component{

	render() {
		return (
			<div>
				<NavBar/>
        <ItemListContainer
          title='¡Hola mundo!'
          />
				<div className='UserSection'>
					<CardComponent
						name='Remera Blanca Tracklist'
						precio='$2700'
						img={Remera1}
					/>
          
					<CardComponent
						name='Remera Oscuro'
						precio='$2350'
						img={Remera2}
					/>
					<CardComponent
						name='Remera Negra Tracklist'
						precio='$2700'
						img={Remera3}
					/>
				</div>
			</div>
		);
	}
}

export default App;
