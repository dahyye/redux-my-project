import {FETCH_HOTEL_LIST,FETCH_HOTEL_DETAIL} from "../actions/types";
const hotelState={
    hotel_list:{},
    hotel_detail:{}
}

export default function(state=hotelState, action){
    switch(action.type){
        case FETCH_HOTEL_LIST:
            return {
                ...state,
                hotel_list:action.payload
            }
        case FETCH_HOTEL_DETAIL:
            return {
                ...state,
                hotel_detail:action.payload
            }
        default:
            return state;
    }
}