const initialState = {
    weather: [],
    isLoading: true,
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            return{
                ...state,
                isLoading: false,
                weather: action.weather,
            };
        case 'GET_DATA_FAILURE':
            return{
                ...state,
                isLoading: true,
                weather: action.error,
            };
        default:
            return state;
    }
}