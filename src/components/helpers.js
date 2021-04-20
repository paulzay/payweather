import moment from 'moment';

export const kelvinToCelsius = (kelvin) => {
    return `${Math.round(kelvin - 273.15)}°C`;
};
export const kelvinToFahrenheit = (kelvin) => {
    return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}°F`;
};

const averages = (list, property = 'temp') => {
  const len = list.length;
  const sum = list.reduce((acc, cur) => {
    return acc + cur.main[property];
  }, 0);
  const avg = sum / len;
  const res = +avg.toFixed(2);
  return res;
};

export const dataConversion = (list) => {
  const copyList = [...list];
  const mappedHoursList = copyList.map(
    (item) => item['dt_txt'].split(' ')[0]
  );
  const objOfUniqueDays = [...new Set(mappedHoursList)].reduce((acc, cur) => {
    return { ...acc, [cur]: [] };
  }, {});
  copyList.forEach((item) => {
    const exactDayDate = item['dt_txt'].split(' ')[0];
    objOfUniqueDays[exactDayDate] = [
      ...objOfUniqueDays[exactDayDate],
      { ...item, main: { ...item.main, temp: +item.main.temp.toFixed(2) } }
    ];
  });

  for (const prop in objOfUniqueDays) {
    objOfUniqueDays[prop] = {
      arr: objOfUniqueDays[prop],
      date: moment(prop).format('DD, MMM YY'),
      temp: averages(objOfUniqueDays[prop]),
      feels_like: averages(objOfUniqueDays[prop], 'feels_like'),
      pressure: averages(objOfUniqueDays[prop], 'pressure'),
      humidity: averages(objOfUniqueDays[prop], 'humidity'),
    };
  }

  return objOfUniqueDays;
};
