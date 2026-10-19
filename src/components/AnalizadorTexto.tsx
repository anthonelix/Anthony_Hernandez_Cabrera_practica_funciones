// AnalizadorTexto.tsx
export const AnalizadorTexto = () => {
  // Función para contar la cantidad de palabras en un texto
  const contarPalabras = (texto: string): number => {
    const textoRecortado = texto.trim();
    if (textoRecortado === "") {
      return 0;
    }
    return textoRecortado.split(/\s+/).length;
  };

  // Función para contar las vocales (incluyendo acentuadas) en un texto
  const contarVocales = (texto: string): number => {
    const coincidencias = texto.match(/[aeiouáéíóú]/gi);
    if (coincidencias === null) {
      return 0;
    }
    return coincidencias.length;
  };

  // Función para invertir los caracteres de un texto
  const invertirTexto = (texto: string): string => {
    return texto.split("").reverse().join("");
  };

  const texto = "Hola mundo desde TypeScript";

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Analizador de Texto</h3>
      <p className="text-gray-700">Texto: "{texto}"</p>
      <p className="text-gray-700">Palabras: {contarPalabras(texto)}</p>
      <p className="text-gray-700">Vocales: {contarVocales(texto)}</p>
      <p className="text-gray-700">Invertido: {invertirTexto(texto)}</p>
    </div>
  );
};