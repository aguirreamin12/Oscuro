import React, { useState } from 'react';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';


import TextField from '@mui/material/TextField';
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';

import './Shop.css';

const initialState = {
	name: '',
	lastName: '',
	city: '',
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Shop = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		// console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			<h1>¡Ingresa tus datos para finalizar tu compra!</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Nombre'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Apellido'
					style={{ margin: 10, width: 400 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Ciudad'
					style={{ margin: 10, width: 400 }}
					name='city'
					value={values.city}
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Enviar</button>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);
};

export default Shop;
