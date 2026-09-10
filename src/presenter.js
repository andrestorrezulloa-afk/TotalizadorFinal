import { calcularPrecioNeto, calcularImpuesto, calcularDescuento, cancelarCompra, confirmarCompra } from "./Totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria"); // Nueva selección
const form = document.querySelector("#totalizador-form");
const confirmarBtn = document.querySelector("#confirmar-btn");
const cancelarBtn = document.querySelector("#cancelar-btn");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseFloat(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value; // Capturamos la categoría

  const precioNeto = calcularPrecioNeto(cantidad, precio);

  if (typeof precioNeto === "string") {
    div.innerHTML = `<p style="color: red;">${precioNeto}</p>`;
    return;
  }

  // Pasamos la categoría a los cálculos
  const descuento = calcularDescuento(precioNeto, categoria);
  const precioConDescuento = precioNeto - descuento;
  
  const impuesto = calcularImpuesto(precioConDescuento, estado, categoria);

  if (typeof impuesto === "string") {
    div.innerHTML = `<p style="color: red;">${impuesto}</p>`;
    return;
  }

  const total = Number((precioConDescuento + impuesto).toFixed(2));

  div.innerHTML = `
    <p><strong>Categoría:</strong> ${categoria}</p>
    <p><strong>Precio neto (${cantidad} x $${precio}):</strong> $${precioNeto}</p>
    <p><strong>Descuento:</strong> -$${descuento}</p>
    <p><strong>Impuesto (${estado}):</strong> +$${impuesto}</p>
    <hr>
    <p><strong>Precio Total:</strong> $${total}</p>
  `;
});

cancelarBtn.addEventListener("click", () => {
  // Ahora pasamos categoriaSelect para que también se reinicie
  cancelarCompra(cantidadInput, precioInput, estadoSelect, categoriaSelect, div);
});

confirmarBtn.addEventListener("click", () => {
  div.innerHTML += `<p style="color: green; font-weight: bold;">${confirmarCompra()}</p>`;
});