// EstadisticasArreglo.tsx
export const EstadisticasArreglo = () => {
  // Función para calcular el promedio de un arreglo numérico
  const calcularPromedio = (nums: number[]): number => {
    if (nums.length === 0) {
      return 0;
    }
    const suma = nums.reduce((acc, n) => acc + n, 0);
    return suma / nums.length;
  };

  // Función para encontrar el valor máximo en un arreglo numérico
  const encontrarMaximo = (nums: number[]): number => {
    if (nums.length === 0) {
      return 0;
    }
    return Math.max(...nums);
  };

  // Función para encontrar el valor mínimo en un arreglo numérico
  const encontrarMinimo = (nums: number[]): number => {
    if (nums.length === 0) {
      return 0;
    }
    return Math.min(...nums);
  };

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <>
      <h3>Estadísticas</h3>
      <p>Números: [{numeros.join(', ')}]</p>
      <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
      <p>Máximo: {encontrarMaximo(numeros)}</p>
      <p>Mínimo: {encontrarMinimo(numeros)}</p>
    </>
  );
};