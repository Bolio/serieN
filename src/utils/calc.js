class SerieN {
  constructor(n) {
    this.n = n;
  }

  calcFibonacci() {
    const position = this.n + 2;

    let number1 = 0;
    let number2 = 1;
    let nextNumber = undefined;

    for (let i = 0; i <= position - 2; i++) {
      nextNumber = number1 + number2;
      number1 = number2;
      number2 = nextNumber;
    }

    // console.log("fn", number2);
    return number2;
  }

  calcPrimo() {
    const position = this.n - 2;

    const limit = 100;
    const primeNumbers = [];
    let cont = 0;

    if(position <= 0) {
      return 1;
    }

    const prime = (number) => {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }

      return number !== 1;
    }

    for (let j = 2; j < limit; j++) {
      if (prime(j)) {
        primeNumbers.push(j);
        cont++;
      }
      if (position === cont) {
        break;
      }
    }

    // console.log(primeNumbers);

    // console.log(primeNumbers[position - 1]);
    return primeNumbers[position - 1];
  }

  calcTriangular() {
    // console.log((this.n * (this.n + 1)) / 2);
    return (this.n * (this.n + 1)) / 2;
  }

  calcTotal(fibo, prim, triang) {
    // console.log("fibo, prim, triang", fibo, prim, triang);

    return (5 * fibo * 2 * prim) / (7 * triang);
  }
}

export default SerieN;
