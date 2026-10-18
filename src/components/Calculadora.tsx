// Calculadora.tsx
export const Calculadora = () => {
    
  const sumar = (a: number, b: number): number => { return a + b; };// Sumar dos números
  const restar = (a: number, b: number): number => { return a - b; };// Restar dos números
  const multiplicar = (a: number, b: number): number => { return a * b; };// Multiplicar dos números
  
const dividir = (a: number, b: number): number => {
    if (b === 0) {
        return 0;
    } else {
        return a / b;
    }
};

 

 
  const a = 15;
  const b = 4;
 
  return (
    <>
      <h3>Calculadora</h3>
      <p>{a} + {b} = {sumar(a, b)}</p>
      <p>{a} - {b} = {restar(a, b)}</p>
      <p>{a} × {b} = {multiplicar(a, b)}</p>
      <p>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
    </>
  );
};

