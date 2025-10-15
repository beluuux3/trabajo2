/* 5. Calcular estadísticas con métodos de arrays:
• - a) Precio promedio de todos los productos activos.*/
let promedioPrecioActivo= helados.filter((h)=>h.estado==="activo")
.reduce((total, h) => total + h.precio, 0)
/(helados.filter((h)=>h.estado==="activo").length);
console.log("Precio promedio (activos):", promedioPrecioActivo, "Bs");
/*
• - b) Total de stock general.*/
let stockGeneral= helados.reduce((total,helado)=>total+helado.stock,0);
/*
• - c) Cantidad de productos por categoría. */
function contarPorCategoria(helados) {
  let cantidad = [];
  helados.forEach((h) => {
    cantidad[h.categoria] = (cantidad[h.categoria] || 0) + 1;
});
  return cantidad;
}


