const productos = [
    /****** lista de analgesicos *******/
    
        {
            id: "Agregar",
            titulo: "Anaflex perlas",
            imagen: "./imagenes/01/01.png",
            categoria: {
                nombre: "analgesico",
                id: "analgesico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Flexipen B12",
            imagen: "./imagenes/01/02.png",
            categoria: {
                nombre: "analgesico",
                id: "analgesico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Floxin Flex",
            imagen: "./imagenes/01/03.png",
            categoria: {
                nombre: "analgesico",
                id: "analgesico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Tafirol Forte",
            imagen: "./imagenes/01/04.png",
            categoria: {
                nombre: "analgesico",
                id: "analgesico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Tramadol",
            imagen: "./imagenes/01/05.png",
            categoria: {
                nombre: "analgesico",
                id: "analgesico"
            },
            precio: 1000
        },
        /****** lista de antialergicos *******/
        {
            id: "Agregar",
            titulo: "Cetrizet",
            imagen: "./imagenes/02/01.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Gripaben plus",
            imagen: "./imagenes/02/02.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Cetirizina Jarabe",
            imagen: "./imagenes/02/03.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Aerotina",
            imagen: "./imagenes/02/04.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Allegra Fexofenadina",
            imagen: "./imagenes/02/05.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Difenhidramina",
            imagen: "./imagenes/02/06.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Clorferinamina",
            imagen: "./imagenes/02/07.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Levocetirizina",
            imagen: "./imagenes/02/08.png",
            categoria: {
                nombre: "antialergico",
                id: "antialergico"
            },
            precio: 1000
        },
        
        /****** lista de antiantibiotico *******/
    
        {
            id: "Agregar",
            titulo: "Amoxidal 500mg",
            imagen: "./imagenes/03/01.png",
            categoria: {
                nombre: "antibiotico",
                id: "antibiotico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Azitromicina 500mg",
            imagen: "./imagenes/03/02.png",
            categoria: {
                nombre: "antibiotico",
                id: "antibiotico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Bactrim forte",
            imagen: "./imagenes/03/03.png",
            categoria: {
                nombre: "antibiotico",
                id: "antibiotico"
            },
            precio: 1000
        },
        {
            id: "anAgregar",
            titulo: "Ciproloxacina",
            imagen: "./imagenes/03/04.png",
            categoria: {
                nombre: "antibiotico",
                id: "antibiotico"
            },
            precio: 1000
        },
        {
            id: "Agregar",
            titulo: "Cealexina",
            imagen: "./imagenes/03/05.png",
            categoria: {
                nombre: "antibiotico",
                id: "antibiotico"
            },
            precio: 1000
        }
    ];
    

//// Aca intento llamar a los productos.json pero por alguna razon no me los toma por eso lo dejo comentado //////////   

/*  let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

 */ /////////////////////////////////////////////////////////////////////////////////
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Se agrego correctamente!",
        duration: 1000,
        close: true,
        gravity: "bottom", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".95rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}