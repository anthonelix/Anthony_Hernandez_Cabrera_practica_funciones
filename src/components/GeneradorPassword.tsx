// GeneradorPassword.tsx
export const GeneradorPassword = () => {
  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+";

  // Función para generar una contraseña aleatoria basada en la longitud y opciones seleccionadas
  const generarPassword = (
    longitud: number,
    incluirNumeros: boolean,
    incluirSimbolos: boolean
  ): string => {
    let conjunto = letras;

    if (incluirNumeros) {
      conjunto += numeros;
    }

    if (incluirSimbolos) {
      conjunto += simbolos;
    }

    let password = "";
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * conjunto.length);
      password += conjunto[indice];
    }

    return password;
  };

  return (
    <>
      <h3>Generador de Contraseñas</h3>
      <p>Básica (8): {generarPassword(8, false, false)}</p>
      <p>Media (12): {generarPassword(12, true, false)}</p>
      <p>Fuerte (16): {generarPassword(16, true, true)}</p>
    </>
  );
};