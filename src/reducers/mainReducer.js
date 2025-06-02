import { FETCH_MAIN_DATA } from '../actions/types';

const mainState = {
    main_data:{}
};

console.log("FETCH_MAIN_DATA 상수값:", FETCH_MAIN_DATA);

export default function(state=mainState, action){
    console.log('dispatching action type:', action.type);
    switch(action.type){
        case FETCH_MAIN_DATA:
            return {
                ...state,
                main_data: action.payload
            }
        default:
            console.log("reducer default");
            return state;
    }
}