import { calcularPrecioNeto, calcularImpuesto} from "./Totalizador.js";

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

  
});