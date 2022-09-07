const productos = [
    {id: 0,
    nombre: 'Remera Blanca Tracklist',
    img: 'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg',
    precio: 2700
    },

    {id: 1,
    nombre: 'Remera Oscuro',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Negro',
    img: 'https://cuestablanca.vteximg.com.br/arquivos/ids/360121-1000-1500/remera-manga-corta-negro-6.jpg',
    precio: 2350
    },

    {id: 2,
    nombre: 'Remera Negra Tracklist',
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-vi-rj1-122009f0e7fe0bfa3715906956218434-480-0.jpg',
    precio: 2700
    },

    {id: 3,
    nombre: 'Remera Negra Oscuro',
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg',
    precio: 2400
    },

    {id: 4,
    nombre: 'Remera Blanca Oscuro',
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-121-3374707c83b41fb15515911959185653-1024-1024.jpg',
    precio: 2400
    },

    {id: 5,
    nombre: 'Remera Blanca Oscuro 2022',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/703/082/products/c_0001_261-0771631becf652085316303733685399-640-0.png',
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