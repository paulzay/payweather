import {combineReducers} from 'redux';
import weather from './weatherReducer';
import tempScale from './toggleScaleReducer';

const rootReducer = combineReducers({
    weather,
    tempScale,
});

export default rootReducer;