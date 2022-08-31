import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ Producto }) => {
	return (
		<Card sx={{ maxWidth: 345, marginTop: '20px', marginLeft: '50%' }}>
			<CardActionArea>
				<CardMedia component='img' image={Producto.img} alt={Producto.nombre} />
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
                        {Producto.nombre}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
                        ${Producto.precio}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Item;