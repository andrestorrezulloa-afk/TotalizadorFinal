import { calcularPrecioNeto, calcularImpuesto} from "./Totalizador.js";

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
    expect(calcularImpuesto(100, "UT")).toEqual(6.65);
  });
  it("deberia calcular el monto del impuesto para el estado TX (6.25%)", () => {
    expect(calcularImpuesto(100, "TX")).toEqual(6.25);
  });

  it("deberia calcular el monto del impuesto para el estado CA (8.25%)", () => {
    expect(calcularImpuesto(200, "CA")).toEqual(16.5);
  });
  it("debería retornar 'Estado inválido' si el código de estado no existe en la lista", () => {
    expect(calcularImpuesto(100, "XX")).toEqual("Estado inválido");
  });
});