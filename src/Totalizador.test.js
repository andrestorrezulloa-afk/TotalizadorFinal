import { calcularPrecioNeto, calcularImpuesto, calcularDescuento, cancelarCompra, confirmarCompra} from "./Totalizador.js";

//precio neto
describe("Totalizador - Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando la cantidad por el precio", () => {
    expect(calcularPrecioNeto(3, 20)).toEqual(60);
  });
  it("debería retornar 'Cantidad inválida' si la cantidad es negativa ", () => {
    expect(calcularPrecioNeto(-5, 20)).toEqual("Cantidad inválida");
  });
  it("debería retornar 'Precio inválido' si el precio es negativo", () => {
    expect(calcularPrecioNeto(3, -10)).toEqual("Precio inválido");
  });
});

//Impuestos
describe("Totalizador - Impuesto", () => {
  it("deberia calcular el monto del impuesto para el estado UT (6.65%)", () => {
    expect(calcularImpuesto(100, "UT", "Varios")).toEqual(6.65);
  });
  it("deberia calcular el monto del impuesto para el estado TX (6.25%)", () => {
    expect(calcularImpuesto(100, "TX", "Varios")).toEqual(6.25);
  });

  it("deberia calcular el monto del impuesto para el estado CA (8.25%)", () => {
    expect(calcularImpuesto(200, "CA", "Varios")).toEqual(16.5);
  });
  it("debería retornar 'Estado inválido' si el código de estado no existe en la lista", () => {
    expect(calcularImpuesto(100, "XX", "Varios")).toEqual("Estado inválido");
  });
  //test con categorias
  it("deberia sumar el 7% adicional de impuesto para Bebidas alcohólicas en UT", () => {
  expect(calcularImpuesto(100, "UT", "Bebidas alcohólicas")).toEqual(13.65);
  });
  it("deberia sumar el 3% adicional de impuesto para Muebles en CA ", () => {
  expect(calcularImpuesto(100, "CA", "Muebles")).toEqual(11.25);
});
  
});

// Descuentos 
describe("Totalizador - Descuento", () => {
  it("deberia calcular 0 de descuento si el monto es menor a 1000", () => {
    expect(calcularDescuento(500, "Varios")).toEqual(0);
  });
  
  it("deberia calcular 3% de descuento si el monto es exactamente 1000", () => {
    expect(calcularDescuento(1000, "Varios")).toEqual(30);
  });

  it("deberia calcular 5% de descuento si el monto es 3000", () => {
    expect(calcularDescuento(3000, "Varios")).toEqual(150);
  });
  
  it("deberia calcular 7% de descuento si el monto es 7000", () => {
    expect(calcularDescuento(7000, "Varios")).toEqual(490);
  });

  it("deberia calcular 10% de descuento si el monto es 10000", () => {
    expect(calcularDescuento(10000, "Varios")).toEqual(1000);
  });

  it("deberia calcular 15% de descuento si el monto es 30000 o mayor", () => {
    expect(calcularDescuento(30000, "Varios")).toEqual(4500);
  });
});

//Cancelar compra
describe("Totalizador - Cancelar Compra", () => {
  it("debería limpiar los campos de entrada y la vista de resultados", () => {
    const cantidadInput = { value: "10" };
    const precioInput = { value: "50" };
    const estadoSelect = { value: "CA" };
    const resultadoDiv = { innerHTML: "<p>Total: $500</p>" };

    cancelarCompra(cantidadInput, precioInput, estadoSelect, resultadoDiv);

    expect(cantidadInput.value).toEqual("");
    expect(precioInput.value).toEqual("");
    expect(estadoSelect.value).toEqual("UT"); 
    expect(resultadoDiv.innerHTML).toEqual("");
  });
});

//Confirmar compra
describe("Totalizador - Confirmar Compra", () => {
  it("debería enviar un mensaje de confirmacion cuando se confirma la compra", () => {
    expect(confirmarCompra()).toEqual("Se confirmó la compra. ¡Gracias por su compra!");
  });
});

