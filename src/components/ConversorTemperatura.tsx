
export const ConversorTemperatura = () => {
    // Convierte grados Celsius a Fahrenheit
    const celsiusAFahrenheit = (c: number): number => {
        return (c * 9 / 5) + 32;
    };

    // Convierte grados Fahrenheit a Celsius
    const fahrenheitACelsius = (f: number): number => {
        return (f - 32) * 5 / 9;
    };

    const temperatura = 25;

    return (
        <div className="my-4">
            <h3 className="text-xl font-bold mb-2">Conversor de Temperatura</h3>
            <p className="text-gray-700">{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
            <p className="text-gray-700">100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
        </div>
    );
};
