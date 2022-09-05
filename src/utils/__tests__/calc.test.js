import SerieN from "../calc";

describe("Calculations", () => {
  test("Should calculate with the number 1", () => {
    const objSerieN = new SerieN(1);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(2.8571);
  });

  test("Should calculate with the number 2", () => {
    const objSerieN = new SerieN(2);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(1.4286);
  });

  test("Should calculate with the number 3", () => {
    const objSerieN = new SerieN(3);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(2.3810);
  });

  test("Should calculate with the number 4", () => {
    const objSerieN = new SerieN(4);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(3.4286);
  });

  test("Should calculate with the number 5", () => {
    const objSerieN = new SerieN(5);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(6.1905);
  });

  test("Should calculate with the number 6", () => {
    const objSerieN = new SerieN(6);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(10);
  });

  test("Should calculate with the number 7", () => {
    const objSerieN = new SerieN(7);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(19.0816);
  });

  test("Should calculate with the number 8", () => {
    const objSerieN = new SerieN(8);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(28.373);
  });

  test("Should calculate with the number 9", () => {
    const objSerieN = new SerieN(9);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(48.0317);
  });

  test("Should calculate with the number 10", () => {
    const objSerieN = new SerieN(10);
  
    const fibo = objSerieN.calcFibonacci();
    const prim = objSerieN.calcPrimo();
    const triang = objSerieN.calcTriangular();
    const total = objSerieN.calcTotal(fibo, prim, triang);

    expect(parseFloat(total?.toFixed(4))).toBe(71.0649);
  });
});