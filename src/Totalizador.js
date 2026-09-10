export function calcularPrecioNeto(cantidad, precio) {
  if (cantidad <= 0) {
    return "Cantidad inválida";
  }
  if (precio <= 0) {
    return "Precio inválido";
  }
  return cantidad * precio;
}

export function calcularImpuesto(precioNeto, estado, categoria = "Varios") {
  const impuestosPorEstado = {
    "UT": 0.0665,
    "NV": 0.0800,
    "TX": 0.0625,
    "AL": 0.0400,
    "CA": 0.0825
  };

  const impuestosPorCategoria = {
    "Alimentos": 0,
    "Bebidas alcohólicas": 0.07,
    "Material de escritorio": 0,
    "Muebles": 0.03,
    "Electrónicos": 0.04,
    "Vestimenta": 0.02,
    "Varios": 0
  };

  if (!(estado in impuestosPorEstado)) {
    return "Estado inválido";
  }

  const tasaEstado = impuestosPorEstado[estado] ;
  const tasaCategoria = impuestosPorCategoria[categoria] ;
  const tasaTotal = tasaEstado + tasaCategoria;

  return Number((precioNeto * tasaTotal).toFixed(2));
}

export function calcularDescuento(precioNeto, categoria = "Varios") {
  let porcentajeBase = 0;

  if (precioNeto >= 30000) porcentajeBase = 0.15;
  else if (precioNeto >= 10000) porcentajeBase = 0.10;
  else if (precioNeto >= 7000) porcentajeBase = 0.07;
  else if (precioNeto >= 3000) porcentajeBase = 0.05;
  else if (precioNeto >= 1000) porcentajeBase = 0.03;

  const descuentosPorCategoria = {
    "Alimentos": 0.02,
    "Bebidas alcohólicas": 0,
    "Material de escritorio": 0.015,
    "Muebles": 0,
    "Electrónicos": 0.01,
    "Vestimenta": 0,
    "Varios": 0
  };

  const porcentajeCategoria = descuentosPorCategoria[categoria];
  const porcentajeTotal = porcentajeBase + porcentajeCategoria;

  const descuento = precioNeto * porcentajeTotal;
  return Number(descuento.toFixed(2));
}

export function cancelarCompra(cantidadInput, precioInput, estadoSelect, categoriaSelect, resultadoDiv) {
  cantidadInput.value = "";
  precioInput.value = "";
  estadoSelect.value = "CA";
  categoriaSelect.value = "Varios";
  resultadoDiv.innerHTML = "";

}

export function confirmarCompra() {
  return "Se confirmó la compra. ¡Gracias por su compra!";
}

export function calcularCostoEnvio(cantidad, pesoVolumetrico) {
  if (pesoVolumetrico <= 10) return 0;
  if (pesoVolumetrico <= 20) return cantidad * 3.5;
  if (pesoVolumetrico <= 40) return cantidad * 5;
  if (pesoVolumetrico <= 80) return cantidad * 6;
  if (pesoVolumetrico <= 100) return cantidad * 6.5;
  if (pesoVolumetrico <= 200) return cantidad * 8;
  return cantidad * 9;
}
