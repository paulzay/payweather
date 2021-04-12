const initialState = {
    weather: [],
    isLoading: false,
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA':
            return{
                ...state,
                isLoading: true,
            };
        case 'GET_DATA_SUCCESS':
            return{
                ...state,
                isLoading: true,
                weather: action.weather,
            };
        case 'GET_DATA_FAILURE':
            return{
                ...state,
                isLoading: false,
                weather: action.error,
            };
        default:
            return state;
    }
}