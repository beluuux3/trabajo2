let helados = [
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
      categoria: "Frutas",
      estado: "activo",
    },
    {
      nombre: "Helado de Menta con Chispas",
      sabor: "Menta con Chispas",
      precio: 20,
      stock: 20,
      categoria: "Doble sabor",
      estado: "activo",
    },
    {
      nombre: "Helado de Cookies and Cream",
      sabor: "Cookies and Cream",
      precio: 14,
      stock: 15,
      categoria: "doble sabor",
      estado: "descontinuado",
    },
    {
      nombre: "Helado de Mango",
      sabor: "Mango",
      precio: 4,
      stock: 10,
      categoria: "Frutas",
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
      categoria: "Frutas",
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
      categoria: "Fruta",
      estado: "activo",
    },
    {
      nombre: "Helado de Coco",
      sabor: "Coco",
      precio: 6,
      stock: 20,
      categoria: "Frutas",
      estado: "activo",
    },
    {
        nombre: "Helado de Frambuesa",
        sabor: "Frambuesa",
        precio: 4,
        stock: 18,
        categoria: "Furtas",
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



function aplicarDescuentoChocolate(listaHelados) {
  let nuevoArray = listaHelados.map(helado => {
    
    if (helado.categoria === "Clásicos") {
      let precioDescuento = helado.precio * 0.85; 
      return {
        nombre: helado.nombre,
        categoria: helado.categoria,
        precioConDescuento: precioDescuento.toFixed(2)
      };
    } else {
      
      return {
        nombre: helado.nombre,
        categoria: helado.categoria,
        precio: helado.precio.toFixed(2)
      };
    }
  });

  return nuevoArray;
}


let heladosConDescuento = aplicarDescuentoChocolate(helados);

console.log(heladosConDescuento);
