export default (initialState = 'celsius', action) => {
    switch (action.type) {
      case 'TOGGLE_TEMP_SCALE':
        return initialState === 'celsius' ? 'fahrenheit' : 'celsius';
      default:
        return initialState;
    }
  };