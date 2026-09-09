export function calcularPrecioNeto(cantidad, precio) {
  if (cantidad <= 0) {
    return "Cantidad inválida";
  }
  if (precio <= 0) {
    return "Precio inválido";
  }
  return cantidad * precio;
}
