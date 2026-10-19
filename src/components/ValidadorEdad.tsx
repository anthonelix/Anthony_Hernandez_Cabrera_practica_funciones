// ValidadorEdad.tsx
export const ValidadorEdad = () => {
  // Función para verificar si la edad corresponde a la mayoría de edad
  const esMayorDeEdad = (edad: number): boolean => {
    return edad >= 18;
  };

  // Función para obtener el mensaje correspondiente según la edad
  const obtenerMensaje = (edad: number): string => {
    if (esMayorDeEdad(edad)) {
      return "Puede votar";
    }
    return `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Validador de Edad</h3>
      {edades.map((edad, i) => (
        <p key={i} className="text-gray-700">
          Edad {edad}: {obtenerMensaje(edad)}
        </p>
      ))}
    </div>
  );
};