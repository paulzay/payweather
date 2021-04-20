export default (initialState = 'fahrenheit', action) => {
    switch (action.type) {
      case 'TOGGLE_TEMP_SCALE':
        return initialState === 'fahrenheit' ? 'celcius' : 'fahrenheit';
      default:
        return initialState;
    }
  };