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

export function calcularDescuento(precioNeto) {
  let porcentaje = 0;

  if (precioNeto >= 30000) porcentaje = 0.15;
  else if (precioNeto >= 10000) porcentaje = 0.10;
  else if (precioNeto >= 7000) porcentaje = 0.07;
  else if (precioNeto >= 3000) porcentaje = 0.05;
  else if (precioNeto >= 1000) porcentaje = 0.03;

  const descuento = precioNeto * porcentaje;
  return Number(descuento.toFixed(2)); // Redondea a 2 decimales y lo convierte a número
}