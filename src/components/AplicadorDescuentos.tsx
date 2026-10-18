// AplicadorDescuentos.tsx
export const AplicadorDescuentos = () => {
  // Función que calcula un 10% de descuento
  const descuento10 = (p: number): number => p * 0.10;

  // Función que calcula un 25% de descuento
  const descuento25 = (p: number): number => p * 0.25;

  // Función que calcula un 15% de descuento para estudiantes
  const descuentoEstudiante = (p: number): number => p * 0.15;

  // Función que aplica un callback de descuento al precio original
  const aplicarDescuento = (
    precio: number,
    calcularDescuento: (p: number) => number
  ): number => {
    return precio - calcularDescuento(precio);
  };

  const precio = 1000;

  return (
    <>
      <h3>Aplicador de Descuentos</h3>
      <p>Precio original: ${precio}</p>
      <p>Con 10% off: ${aplicarDescuento(precio, descuento10)}</p>
      <p>Con 25% off: ${aplicarDescuento(precio, descuento25)}</p>
      <p>Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}</p>
    </>
  );
};