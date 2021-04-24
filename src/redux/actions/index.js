import axios from 'axios';
import {dataConversion, errorToast, successToast} from '../../components/helpers';

const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40'

export const getWeather = () => dispatch => {
  axios.get(baseUrl)
    .then(res => {
      const weather = dataConversion(res.data.list);
      dispatch({
        type: 'GET_DATA_SUCCESS',
        weather,
      });
      successToast('Here is your weather report')
    }).catch( error =>{
      dispatch({
        type: 'GET_DATA_FAILURE',
        error,
      })
      errorToast(error)
    })
};

export const toggleTempScale = () => {
  return { type: 'TOGGLE_TEMP_SCALE' };
};
