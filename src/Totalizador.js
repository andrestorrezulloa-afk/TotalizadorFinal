export function calcularPrecioNeto(cantidad, precio) {
  if (cantidad <= 0) {
    return "Cantidad inválida";
  }
  if (precio <= 0) {
    return "Precio inválido";
  }
  return cantidad * precio;
}
export function calcularImpuesto(precioNeto, estado) {
  const impuestosPorEstado = {
    "UT": 0.0665, 
    "NV": 0.0800,
    "TX": 0.0625, 
    "AL": 0.0400, 
    "CA": 0.0825  
  };
  if (!(estado in impuestosPorEstado)) {
    return "Estado inválido";
  }
  const tasa = impuestosPorEstado[estado] || 0;
  return Number((precioNeto * tasa).toFixed(2));
}