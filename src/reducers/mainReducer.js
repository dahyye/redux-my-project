import {FETCH_MAIN_DATA, NEWS_LIST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE} from '../actions/types';

const mainState = {
    main_data:{},
    news_data:{},
    userId:null,
    isLoggedIn:false,
    error:null
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
        case NEWS_LIST:
            return {
                ...state,
                news_data: action.payload
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                isLoggedIn: true,
                error: null
            }
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload
            }

        default:
            console.log("reducer default");
            return state;
    }
}