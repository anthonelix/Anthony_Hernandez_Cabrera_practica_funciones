// CarritoCompras.tsx
export const CarritoCompras = () => {
  // Función para calcular el subtotal de un producto (precio por cantidad)
  const calcularSubtotal = (precio: number, cantidad: number): number => {
    return precio * cantidad;
  };

  // Función para calcular el IVA (16% del subtotal)
  const calcularIVA = (subtotal: number): number => {
    return subtotal * 0.16;
  };

  // Función para calcular el total sumando el subtotal y su respectivo IVA
  const calcularTotal = (subtotal: number): number => {
    return subtotal + calcularIVA(subtotal);
  };

  // Función para formatear el precio como una cadena con el símbolo de pesos y dos decimales
  const formatearPrecio = (precio: number): string => {
    return `$${precio.toFixed(2)}`;
  };

  const carrito = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 },
  ];

  // Cálculo del subtotal general acumulando el subtotal de cada ítem del carrito
  const subtotal = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <>
      <h3>Carrito de Compras</h3>
      {carrito.map((item) => {
        const subtotalItem = calcularSubtotal(item.precio, item.cantidad);
        return (
          <p key={item.producto}>
            {item.producto} x{item.cantidad} = {formatearPrecio(subtotalItem)}
          </p>
        );
      })}
      <hr />
      <p>Subtotal: {formatearPrecio(subtotal)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotal))}</p>
      <p>
        <strong>Total: {formatearPrecio(calcularTotal(subtotal))}</strong>
      </p>
    </>
  );
};