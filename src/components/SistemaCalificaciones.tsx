// SistemaCalificaciones.tsx
interface Alumno {
  nombre: string;
  califs: number[];
}

export const SistemaCalificaciones = () => {
  // Función para calcular el promedio de calificaciones
  const calcularPromedio = (calificaciones: number[]): number => {
    if (calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acc, n) => acc + n, 0);
    return suma / calificaciones.length;
  };

  // Función para asignar una letra según el promedio obtenido
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Función para verificar si el promedio cumple con la aprobación (>= 70)
  const estaAprobado = (promedio: number): boolean => {
    return promedio >= 70;
  };

  const alumnos: Alumno[] = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] },
  ];

  return (
    <>
      <h3>Sistema de Calificaciones</h3>
      {alumnos.map((alumno) => {
        const promedio = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(promedio);
        const aprobado = estaAprobado(promedio);

        return (
          <p key={alumno.nombre}>
            {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} - {aprobado ? "Aprobado" : "Reprobado"}
          </p>
        );
      })}
    </>
  );
};