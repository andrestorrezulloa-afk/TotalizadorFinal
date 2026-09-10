import { calcularPrecioNeto, calcularImpuesto, calcularDescuento, cancelarCompra, confirmarCompra } from "./Totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const confirmarBtn = document.querySelector("#confirmar-btn");
const cancelarBtn = document.querySelector("#cancelar-btn");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseFloat(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;

  const precioNeto = calcularPrecioNeto(cantidad, precio);

  if (typeof precioNeto === "string") {
    div.innerHTML = `<p style="color: red;">${precioNeto}</p>`;
    return;
  }

  const descuento = calcularDescuento(precioNeto);
  const precioConDescuento = precioNeto - descuento;
  
  
  const impuesto = calcularImpuesto(precioConDescuento, estado);

  if (typeof impuesto === "string") {
    div.innerHTML = `<p style="color: red;">${impuesto}</p>`;
    return;
  }

  const total = Number((precioConDescuento + impuesto).toFixed(2));

  div.innerHTML = `
    <p><strong>Precio neto (${cantidad} x $${precio}):</strong> $${precioNeto}</p>
    <p><strong>Descuento:</strong> -$${descuento}</p>
    <p><strong>Impuesto (${estado}):</strong> +$${impuesto}</p>
    <hr>
    <p><strong>Precio Total:</strong> $${total}</p>
  `;
});
cancelarBtn.addEventListener("click", () => {
  cancelarCompra(cantidadInput, precioInput, estadoSelect, div);
});

confirmarBtn.addEventListener("click", () => {
  div.innerHTML += `<p style="color: green; font-weight: bold;">${confirmarCompra()}</p>`;
});