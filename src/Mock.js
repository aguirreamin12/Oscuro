const productos = [
    {id: 0,
    nombre: 'Remera Blanca Tracklist',
    img: './img/remeras/dorso.png',
    precio: 2700
    },

    {id: 1,
    nombre: 'Remera Oscuro',
    img: './img/remeras/Remera-Dorso.png',
    precio: 2350
    },

    {id: 2,
    nombre: 'Remera Negra Tracklist',
    img: './img/remeras/SALW-DORSO.png',
    precio: 2700
    },

    {id: 3,
    nombre: 'Remera Negra Oscuro',
    img: './img/remeras/Frente1.png',
    precio: 2400
    },

    {id: 4,
    nombre: 'Remera Blanca Oscuro',
    img: '.img/remeras/FRENTE.png',
    precio: 2400
    },

    {id: 5,
    nombre: 'Remera Blanca Oscuro 2022',
    img: '.img/remeras/Remera-Frente(1).png',
    precio: 2400
    },
]


export const getFetch = new Promise((respuesta, rejected) => {

    let url = 'www.productos.com.ar'

    if (url === 'www.productos.com.ar'){
        setTimeout(() => {
            respuesta(productos);
        }, 2000);
    } else {
        rejected('400 not found')
    }
})