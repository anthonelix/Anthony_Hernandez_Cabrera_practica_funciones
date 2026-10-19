// CalculadoraIMC.tsx
export const CalculadoraIMC = () => {
  const calcularIMC = (peso: number, altura: number): number => {
    return peso / (altura * altura);
  };

  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Calculadora de IMC</h3>
      <p className="text-gray-700">Peso: {peso} kg | Altura: {altura} m</p>
      <p className="text-gray-700">IMC: {imc.toFixed(2)}</p>
      <p className="text-gray-700">Clasificación: <strong>{clasificarIMC(imc)}</strong></p>
    </div>
  );
};