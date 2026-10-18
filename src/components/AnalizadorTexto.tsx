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
    <>
      <h3>Analizador de Texto</h3>
      <p>Texto: "{texto}"</p>
      <p>Palabras: {contarPalabras(texto)}</p>
      <p>Vocales: {contarVocales(texto)}</p>
      <p>Invertido: {invertirTexto(texto)}</p>
    </>
  );
};