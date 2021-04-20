import weather from '../redux/reducers/weatherReducer';

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(weather(undefined, {})).toEqual({
      weather: [],
      isLoading: true,
    });
  });

  it('should fetch the weather', () => {
    expect(
      weather([], {
        type: 'GET_DATA_SUCCESS',
      }),
    ).toEqual({
      isLoading: false,
    });
  });
});
