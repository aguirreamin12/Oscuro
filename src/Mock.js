const productos = [
    {id: "0",
    nombre: 'Remera Blanca Tracklist',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Blanco',
    img: 'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg',
    precio: 2700,
    category: 'Remera',
    },

    {id: "1",
    nombre: 'Remera Oscuro',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Negro',
    img: 'https://cuestablanca.vteximg.com.br/arquivos/ids/360121-1000-1500/remera-manga-corta-negro-6.jpg',
    precio: 2350,
    category: 'Remera',
    },

    {id: "2",
    nombre: 'Remera Verde Tracklist',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Verde',
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-vi-rj1-122009f0e7fe0bfa3715906956218434-480-0.jpg',
    precio: 2700,
    category: 'Remera',
    },

    {id: "3",
    nombre: 'Remera Azul',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Azul',
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg',
    precio: 2400,
    category: 'Remera',
    },

    {id: "4",
    nombre: 'Remera Amarilla',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Amarillo',
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-121-3374707c83b41fb15515911959185653-1024-1024.jpg',
    precio: 2400,
    category: 'Remera',
    },

    {id: "5",
    nombre: 'Remera Roja Oscuro 2022',
    material: 'Algodón con un 80% de poliester',
    cuello: 'Redondo',
    color: 'Rojo',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/703/082/products/c_0001_261-0771631becf652085316303733685399-640-0.png',
    precio: 2400,
    category: 'Remera',
    },

    {id: "6",
    nombre: 'Buzo Oscuro',
    material: 'Felpa francesa 100% algodón',
    cuello: 'Redondo',
    color: 'Negro',
    img: 'https://http2.mlstatic.com/D_NQ_NP_785153-MLA43268680380_082020-O.jpg',
    precio: 5500,
    category: 'Buzo',
    },

    {id: "7",
    nombre: 'Buzo Canguro Blanco',
    material: 'Felpa francesa 100% algodón',
    cuello: 'Redondo',
    color: 'Blanco',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/77baf6a47f3c5f817658520a84097c551-e167d85110c8d3a9e016243830743243-1024-1024.jpg',
    precio: 5300,
    category: 'Buzo',
    },

    {id: "8",
    nombre: 'Buzo Blanco/Negro',
    material: 'Felpa francesa 100% algodón',
    cuello: 'Redondo',
    color: 'Blanco/Negro',
    img: 'https://http2.mlstatic.com/D_NQ_NP_990813-MLA32985647401_112019-O.jpg',
    precio: 5900,
    category: 'Buzo',
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