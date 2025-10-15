let productos = [
  {
    nombre: "Helado de Vainilla",
    sabor: "Vainilla",
    precio: 10,
    stock: 50,
    categoria: "Clásicos",
    estado: "activo",
  },
  {
    nombre: "Helado de Chocolate",
    sabor: "Chocolate",
    precio: 15,
    stock: 30,
    categoria: "Clásicos",
    estado: "activo",
  },
    {
      nombre: "Helado de Fresa",
      sabor: "Fresa",
      precio: 3,
      stock: 25,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Menta con Chispas",
      sabor: "Menta con Chispas",
      precio: 20,
      stock: 20,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Cookies and Cream",
      sabor: "Cookies and Cream",
      precio: 14,
      stock: 15,
      categoria: "Clásicos",
      estado: "descontinuado",
    },
    {
      nombre: "Helado de Mango",
      sabor: "Mango",
      precio: 4,
      stock: 10,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Pistacho",
      sabor: "Pistacho",
        precio: 4.8,
      stock: 5,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Dulce de Leche",
      sabor: "Dulce de Leche",
      precio: 17,
      stock: 12,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Limón",
      sabor: "Limón",
      precio: 10,
      stock: 8,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Café",
      sabor: "Café",
      precio: 5,
      stock: 12,
      categoria: "Clásicos",
      estado: "descontinuado",
    },
    {
      nombre: "Helado de Avellana",
      sabor: "Avellana",
      precio: 19,
      stock: 10,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
      nombre: "Helado de Coco",
      sabor: "Coco",
      precio: 6,
      stock: 20,
      categoria: "Clásicos",
      estado: "activo",
    },
    {
        nombre: "Helado de Frambuesa",
        sabor: "Frambuesa",
        precio: 4,
        stock: 18,
        categoria: "Clásicos",
        estado: "activo",
      },
        {
          nombre: "Helado de Té Verde",
          sabor: "Té Verde",
          precio: 9,
          stock: 10,
          categoria: "Clásicos",
          estado: "descontinuado",
        },
        {
          nombre: "Helado de Caramelo Salado",
          sabor: "Caramelo Salado",
          precio: 11,
          stock: 10,
          categoria: "Clásicos",
          estado: "descontinuado",
        },
];

/*  2. Mostrar todos los productos en consola usando forEach.
*/
productos.forEach((producto) => {
    console.log(producto);
})

/* ---filtro de productos con precio mayor a un valor definido------ */
let productosCaros = productos.filter((producto) => producto.precio > 10);
console.log("Productos caros:", productosCaros);
/* ---filtro de productos con stock bajo (menor a 10 unidades)------ */
let productosStockBajo = productos.filter((producto) => producto.stock < 10);
console.log("Productos con stock bajo:", productosStockBajo);
/* ---filtro de productos activos------ */
let productosActivos = productos.filter((producto) => producto.estado === "activo");
console.log("Productos activos:", productosActivos);



/* 5. Calcular estadísticas con métodos de arrays:
• - a) Precio promedio de todos los productos activos.*/
let promedioPrecioActivo= productos.filter((h)=>h.estado==="activo")
.reduce((total, h) => total + h.precio, 0)
/(productos.filter((h)=>h.estado==="activo").length);
console.log("Precio promedio (activos):", promedioPrecioActivo, "Bs");
/*
• - b) Total de stock general.*/
let stockGeneral= productos.reduce((total,helado)=>total+helado.stock,0);
/*
• - c) Cantidad de productos por categoría. */
function contarPorCategoria(productos) {
  let cantidad = [];
  productos.forEach((h) => {
    cantidad[h.categoria] = (cantidad[h.categoria] || 0) + 1;
});
  return cantidad;
}

/*------------------ 6. Crear funciones separadas para cada tarea (ej. filtrarPorPrecio, aplicarDescuento,
calcularPromedio, etc.)*/

// Funcion que muestra todos los productos //

function mostrarProductos(lista) {
    lista.forEach((producto, index) => {
        console.log
        (`$index + 1}.${producto.nombre} - ${producto.sabor} - ${producto.precio} - Stock: ${producto.stock} - ${producto.categoria} (${producto.estado})`

        );
    });
}

// funcion para filtrar producto por precio

function filtrarPorPrecio(lista,minimo) {
    return lista.filter(producto => producto.precio > minimo);
}

// filtrar productos con stock bajo (menor a 10 piezas)
function filtrarStock(lista) {
    return lista.filter(producto => producto.stock < 10);
}

// funcion para filtrar productos activos
function filtrarActivos(lista) {
    return lista.filter(producto => producto.estado === "activo");
}

// funcion para aplicar 15% de descuento y devolver un nuevo array
function aplicarDescuento(lista) {
    return lista.map(producto => ({
        nombre: producto.nombre,
        categoria: producto.categoria,
        precioDescuento: `$${(producto.precio * 0.85) .toFixed(2)}`

    }));
}

// funcion para calcular el precio de productos activos
function calcularPromedioActivos (lista) {
    let activos = filtrarActivos(lista);
    let total = activos.reduce((suma, producto) => + producto.precio, 0);
    return `$${(total / activos.length).toFixed(2)}`;
}





