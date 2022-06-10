/**PRODUCTOS*/
fetch("/productoCarro.json")
    .then((res) => {
        return res.json()
    }).then((productoCarro) => {
        Stock(productoCarro);
        buscador(productoCarro);
        carrito(productoCarro);
        todos(productoCarro);
        Perros(productoCarro);
        Gatos(productoCarro);
        Peces(productoCarro);
        Pajaros(productoCarro);
    })

/**BUSCADOR*/
//buscar
function buscador(productoCarro){
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
function Stock(productoCarro){
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
function carrito(productoCarro){
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
function todos(productoCarro) {
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
function Perros(productoCarro) {
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
function Gatos(productoCarro) {
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
function Peces(productoCarro) {
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
function Pajaros(productoCarro) {
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




