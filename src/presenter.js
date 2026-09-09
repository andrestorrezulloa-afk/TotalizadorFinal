import { calcularPrecioNeto } from "./Totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseFloat(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);

  const precioNeto = calcularPrecioNeto(cantidad, precio);

  if (typeof precioNeto === "string") {
    div.innerHTML = `<p style="color: red;">${precioNeto}</p>`;
    return;
  }

  div.innerHTML = `
    <p><strong>Precio neto (${cantidad} x $${precio}):</strong> $${precioNeto}</p>
  `;
});