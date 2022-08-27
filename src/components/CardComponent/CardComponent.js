import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const CardComponent = ({ name, precio, img }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={img} alt='Producto' />
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Precio: {precio}
					</Typography>
					<ItemCount/>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardComponent;
