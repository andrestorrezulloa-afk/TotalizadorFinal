import { calcularPrecioNeto, calcularImpuesto, calcularDescuento, calcularCostoEnvio, confirmarCompra } from "./Totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const pesoInput = document.querySelector("#peso"); 
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const tipoClienteSelect = document.querySelector("#tipoCliente"); 

const form = document.querySelector("#totalizador-form");
const confirmarBtn = document.querySelector("#confirmar-btn");
const cancelarBtn = document.querySelector("#cancelar-btn");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseFloat(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const peso = Number.parseFloat(pesoInput.value); 
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value; 
  const tipoCliente = tipoClienteSelect.value; 

  const precioNeto = calcularPrecioNeto(cantidad, precio);
  if (typeof precioNeto === "string") {
    div.innerHTML = `<p style="color: red;">${precioNeto}</p>`;
    return;
  }
  
  const descuento = calcularDescuento(precioNeto, categoria, tipoCliente);
  const precioConDescuento = precioNeto - descuento;
  
  const impuesto = calcularImpuesto(precioConDescuento, estado, categoria);
  if (typeof impuesto === "string") {
    div.innerHTML = `<p style="color: red;">${impuesto}</p>`;
    return;
  }

  const costoEnvio = calcularCostoEnvio(cantidad, peso);
  if (typeof costoEnvio === "string") {
    div.innerHTML = `<p style="color: red;">${costoEnvio}</p>`;
    return;
  }
  
  const total = Number((precioConDescuento + impuesto + costoEnvio).toFixed(2));
  
  div.innerHTML = `
    <p><strong>Tipo de Cliente:</strong> ${tipoCliente}</p>
    <p><strong>Categoría:</strong> ${categoria}</p>
    <p><strong>Precio neto (${cantidad} x $${precio}):</strong> $${precioNeto}</p>
    <p><strong>Descuento:</strong> -$${descuento}</p>
    <p><strong>Impuesto (${estado}):</strong> +$${impuesto}</p>
    <p><strong>Costo de Envío:</strong> +$${costoEnvio}</p>
    <hr>
    <p><strong>Precio Total:</strong> $${total}</p>
  `;
});

cancelarBtn.addEventListener("click", () => {
  cantidadInput.value = "";
  precioInput.value = "";
  pesoInput.value = "";
  estadoSelect.value = "CA";
  categoriaSelect.value = "Varios";
  tipoClienteSelect.value = "Normal";
  div.innerHTML = "";
});

confirmarBtn.addEventListener("click", () => {
  div.innerHTML += `<p style="color: green; font-weight: bold;">${confirmarCompra()}</p>`;
});