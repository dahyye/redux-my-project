import {combineReducers} from 'redux';

import mainReducer from './mainReducer';
import boardsReducer from './boardReducer';
import youtubeReducer from "./youtubeReducer";
import hotelReducer from "./hotelReducer";

export default combineReducers({
    mains: mainReducer,
    boards: boardsReducer,
    youtubes: youtubeReducer,
    hotels: hotelReducer
});