export const kelvinToCelsius = (kelvin) => {
    return `${Math.round(kelvin - 273.15)}°C`;
};
export const kelvinToFahrenheit = (kelvin) => {
    return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}°F`;
};
  