/**PRODUCTOS*/
const productoCarro = [
    {
        imagen: "./multimedia/ringo.png",
        nombre: "Ringo",
        precio: 4,
        categoria: "perro",
        categoriaGeneral: "todos",
        id: "1"
    },
    {
        imagen: "./multimedia/happyOne.png",
        nombre: "HappyOne",
        precio: 28,
        categoria: "perro",
        categoriaGeneral: "todos",
        id: "2"
    },
    {
        imagen: "./multimedia/perrarina.png",
        nombre: "Perrarina",
        precio: 12,
        categoria: "perro",
        categoriaGeneral: "todos",
        id: "3"
    },
    {
        imagen: "./multimedia/simpli.png",
        nombre: "Simpli Crock",
        precio: 6.7,
        categoria: "perro",
        categoriaGeneral: "todos",
        id: "4"
    },
    {
        imagen: "./multimedia/dogpro.png",
        nombre: "DogPro",
        precio: 11,
        categoria: "perro",
        categoriaGeneral: "todos",
        id: "5"
    },
    {
        imagen: "./multimedia/upper.png",
        nombre: "Upper Crock",
        precio:  7.75,
        categoria: "perro",
        categoriaGeneral: "todos",
        id: "6"
    },
    {
        imagen: "./multimedia/miringo.png",
        nombre: "Miringo",
        precio: 2.1,
        categoria: "gato",
        categoriaGeneral: "todos",
        id: "7"
    },
    {
        imagen: "./multimedia/simpliGato.png",
        nombre: "Simpli Crock",
        precio: 5,
        categoria: "gato",
        categoriaGeneral: "todos",
        id: "8"
    },
    {
        imagen: "./multimedia/gatsy.png",
        nombre: "Gatsy",
        precio: 3.5,
        categoria: "gato",
        categoriaGeneral: "todos",
        id: "9"
    },
    {
        imagen: "./multimedia/catchow.webp",
        nombre: "Cat Chow",
        precio: 7,
        categoria: "gato",
        categoriaGeneral: "todos",
        id: "10"
    },
    {
        imagen: "./multimedia/tetra.png",
        nombre: "TetraMin",
        precio: 1.8,
        categoria: "pez",
        categoriaGeneral: "todos",
        id: "11"
    },
    {
        imagen: "./multimedia/aqueon.png",
        nombre: "Aqueon",
        precio: 1.5,
        categoria: "pez",
        categoriaGeneral: "todos",
        id: "12"
    },
    {
        imagen: "./multimedia/kantalPez.png",
        nombre: "Kantal",
        precio: 2,
        categoria: "pez",
        categoriaGeneral: "todos",
        id: "13"
    },
    {
        imagen: "./multimedia/alpiste.png",
        nombre: "Kantal Alpiste",
        precio: 1.8,
        categoria: "pajaro",
        categoriaGeneral: "todos",
        id: "14"
    },
    {
        imagen: "./multimedia/semillas.png",
        nombre: "Kantal Semillas",
        precio: 2.5,
        categoria: "pajaro",
        categoriaGeneral: "todos",
        id: "15"
    }
]

/**BUSCADOR*/
//buscar
function buscador(){
    const contenedor = document.getElementById("carroo");
    const input = document.getElementById("input");
    input.addEventListener("input", () =>{
        let valor = input.value;
        let productosBuscados = productoCarro.filter( (productoCarro) =>{
            return productoCarro.nombre.toLowerCase() == valor.toLowerCase()
        })
        contenedor.innerText = "";
        (productosBuscados.length > 0) && productosBuscados.forEach((productoCarro) =>{  
            const cartas = document.createElement("div");
            cartas.innerHTML = `
            <div>
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}</p>
                <button class="boton btn btn-secondary" type="button">Agregar al carrito</button>
            </div>
        `
        const botones = document.getElementsByClassName("boton");
        for(const boton of botones) {
            boton.addEventListener('click', () => {  
                agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
                console.log(agregarACarrito)
                agregadosCarrito()
                myFunction()
            });
        }
        contenedor.append(cartas)
        })
    })
}
buscador()

/**CARRITO*/
//agregar al localStorage y total
localStorage.clear()
function agregadosCarrito(){
   localStorage.setItem("productos", JSON.stringify(agregarACarrito))
}
const agregarACarrito = [];
let sum = 0;


//carrito en el DOM
function Stock(){
    productoCarro.forEach((productoCarro) => {
        const contenedor = document.getElementById("carroo");
        const cartas = document.createElement("div");
        cartas.innerHTML = `
            <div class= "responsiveTablet m-2 p-2">
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}$</p>
                <button class="btn btn-secondary" id="${productoCarro.id}"  type="button">Agregar al carrito</button>
            </div>
        `
        contenedor.append(cartas)
        const boton = document.getElementById(`${productoCarro.id}`);
        boton.addEventListener('click', () => {
            agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
            console.log(agregarACarrito)
            agregadosCarrito()
            myFunction()
            
        });
    })
    
}
Stock();

//productos en el carrito
function carrito(){
    const carritoo = document.getElementById("carritoo");
    carritoo.addEventListener("click", () =>{
        const todo = document.getElementById("contenidoTotal")
        todo.innerText = (" ")
        agregarACarrito.forEach((agregarACarrito) => {
            const lista = document.createElement("ul")
            lista.innerHTML = `
                <div class = "row carritoProductos">
                    <ul class="listaCarro">
                        <li class="itemCarroImg"><img src=${agregarACarrito.imagen} class="imagenProductos"></img></li>
                        <li class="itemCarro"><h4 class="titulo">${agregarACarrito.nombre}</h4></li>
                        <li class="itemCarro">${agregarACarrito.precio}$</li>
                    </ul>
                </div>
            `
            todo.append(lista)
            const total = document.getElementById("total")
            sum += agregarACarrito.precio;
            total.innerHTML = `<h3 class="titulo">Total: ${sum}$</h3>`
        })
    })
}
carrito()

/**FILTROS*/
//todos los productos
function todos() {
    const todos = document.getElementById
    ("todos");
    todos.addEventListener("click", () => {
        const Titulo = document.getElementById
        ("titulo");
        const titulo = document.createElement
        ("h2");
        titulo.innerText = ("Todos los productos");
        Titulo.innerHTML = "";
        Titulo.append(titulo);
        let contenedor = document.getElementById("carroo")
        let valor = "todos";
        let productosBuscados = productoCarro.filter( (productoCarro) =>{
            return productoCarro.categoriaGeneral == valor
        })
        contenedor.innerText = "";
        (productosBuscados.length > 0) && productosBuscados.forEach((productoCarro) =>{
            contenedor = document.getElementById("carroo");
            const cartas = document.createElement("div");
            cartas.innerHTML = `
            <div class="responsiveTablet">
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}$</p>
                <button class="btn btn-secondary" id="${productoCarro.id}"  type="button">Agregar al carrito</button>
            </div>
        `      
            contenedor.append(cartas)        
            const boton = document.getElementById(`${productoCarro.id}`);
            boton.addEventListener('click', () => {
                agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
                console.log(agregarACarrito)
                agregadosCarrito()
                myFunction()
            
            });
        })
    })
}
todos()

//filtro de productos de perros
function Perros() {
    const perros = document.getElementById
    ("perro");
    perros.addEventListener("click", () => {
        const Titulo = document.getElementById
        ("titulo");
        const titulo = document.createElement
        ("h2");
        titulo.innerText = ("Productos para Perros");

        Titulo.innerHTML = "";
        Titulo.append(titulo);

        let contenedor = document.getElementById("carroo")
        let valor = "perro";
        let productosBuscados = productoCarro.filter( (productoCarro) =>{
            return productoCarro.categoria == valor
        })
        contenedor.innerText = "";
        (productosBuscados.length > 0) && productosBuscados.forEach((productoCarro) =>{
            contenedor = document.getElementById("carroo");
            const cartas = document.createElement("div");
            cartas.innerHTML = `
            <div class="responsiveTablet">
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}$</p>
                <button class="btn btn-secondary" id="${productoCarro.id}"  type="button">Agregar al carrito</button>
            </div>
        `
            contenedor.append(cartas)
            const boton = document.getElementById(`${productoCarro.id}`);
            boton.addEventListener('click', () => {
                agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
                console.log(agregarACarrito)
                agregadosCarrito()
                myFunction()
            });
        })
    })
}
Perros()

//filtro de productos de gatos
function Gatos() {
    const gatos = document.getElementById
    ("gato");
    gatos.addEventListener("click", () => {
        const Titulo = document.getElementById
        ("titulo");
        const titulo = document.createElement
        ("h2");
        titulo.innerText = ("Productos para Gatos");

        Titulo.innerHTML = "";
        Titulo.append(titulo);

        let contenedor = document.getElementById("carroo")
        let valor = "gato";
        let productosBuscados = productoCarro.filter( (productoCarro) =>{
            return productoCarro.categoria == valor
        })
        contenedor.innerText = "";
        (productosBuscados.length > 0) && productosBuscados.forEach((productoCarro) =>{
            contenedor = document.getElementById("carroo");
            const cartas = document.createElement("div");
            cartas.innerHTML = `
            <div class="responsiveTablet">
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}$</p>
                <button class="btn btn-secondary" id="${productoCarro.id}"  type="button">Agregar al carrito</button>
            </div>
        `
            contenedor.append(cartas)
            const boton = document.getElementById(`${productoCarro.id}`);
            boton.addEventListener('click', () => {
                agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
                console.log(agregarACarrito)
                agregadosCarrito()
                myFunction()
            });
        })
    })
} 
Gatos()

//filtro de productos de peces
function Peces() {
    const peces = document.getElementById
    ("pez");
    peces.addEventListener("click", () => {
        const Titulo = document.getElementById
        ("titulo");
        const titulo = document.createElement
        ("h2");
        titulo.innerText = ("Productos para Peces");

        Titulo.innerHTML = "";
        Titulo.append(titulo);

        let contenedor = document.getElementById("carroo")
        let valor = "pez";
        let productosBuscados = productoCarro.filter( (productoCarro) =>{
        return productoCarro.categoria == valor
    })
        contenedor.innerText = "";
        (productosBuscados.length > 0) && productosBuscados.forEach((productoCarro) =>{
            contenedor = document.getElementById("carroo");
            const cartas = document.createElement("div");
            cartas.innerHTML = `
            <div class="responsiveTablet">
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}$</p>
                <button class="btn btn-secondary" id="${productoCarro.id}"  type="button">Agregar al carrito</button>
            </div>
        `
            contenedor.append(cartas)      
            const boton = document.getElementById(`${productoCarro.id}`);
            boton.addEventListener('click', () => {
                agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
                console.log(agregarACarrito)
                agregadosCarrito()
                myFunction()
            });
        })
    })
}
Peces()

//filtro de productos de pajaros
function Pajaros() {
    const pajaros = document.getElementById
    ("pajaro");
    pajaros.addEventListener("click", () => {
        const Titulo = document.getElementById
        ("titulo");
        const titulo = document.createElement
        ("h2");
        titulo.innerText = ("Productos para Pajaros");

        Titulo.innerHTML = "";
        Titulo.append(titulo);

        let contenedor = document.getElementById("carroo")
        let valor = "pajaro";
        let productosBuscados = productoCarro.filter( (productoCarro) =>{
            return productoCarro.categoria == valor
        })
        contenedor.innerText = "";
        (productosBuscados.length > 0) && productosBuscados.forEach((productoCarro) =>{
            contenedor = document.getElementById("carroo");
            const cartas = document.createElement("div");
            cartas.innerHTML = `
            <div class="responsiveTablet">
                <img src=${productoCarro.imagen} class="imgCarro"></img>
                <h1 class="titulo">${productoCarro.nombre}</h1>
                <p>${productoCarro.precio}$</p>
                <button class="btn btn-secondary" id="${productoCarro.id}"  type="button">Agregar al carrito</button>
            </div>
        `
            contenedor.append(cartas)
            const boton = document.getElementById(`${productoCarro.id}`);
            boton.addEventListener('click', () => {
                agregarACarrito.push({"nombre":productoCarro.nombre,"precio":productoCarro.precio,"imagen":productoCarro.imagen});
                console.log(agregarACarrito)
                agregadosCarrito()
                myFunction()
            });
        })
    })
}
Pajaros();

/**NOTIFICACION*/
function myFunction(){
    Toastify({
        text: "Se agrego al carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "rigth", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#C95004",
        },
        onClick: function (){} // Callback after click
      }).showToast();
      
    }




