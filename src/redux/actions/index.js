import axios from 'axios';
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40'

export const getWeather = () => dispatch => {
    axios.get(baseUrl)
      .then(res => {
        const weather = res.data.list;
        console.log(weather);
        dispatch({
          type: 'GET_DATA_SUCCESS',
          weather,
        });
      });
  };