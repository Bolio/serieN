import Label from "./Label";
import SerieN from "../utils/calc";

const HiddenComponent = ({ valueN, hide }) => {
  // console.log("VALUE-N: ", valueN);
  const valueNInt = parseInt(valueN);

  const serie = new SerieN(valueNInt);
  const fibo = serie.calcFibonacci();
  const prim = serie.calcPrimo();
  const triang = serie.calcTriangular();
  const total = serie.calcTotal(fibo, prim, triang);
  // console.log("total", total);

  return (
    <>
      <div hidden={hide}>
        <Label title={`Fibonacci #${valueNInt + 2}`}>{fibo}</Label>
        <Label title={`Primo #${valueNInt - 2}`}>{prim}</Label>
        <Label title={`Triangular #${valueNInt}`}>{triang}</Label>
      </div>
      <Label title='Total'>{isNaN(total) ? '' : total?.toFixed(4)}</Label>
    </>
  );
};

export default HiddenComponent;
