import axios from 'axios';
import { FETCH_MAIN_DATA } from '../actions/types';
export const fetchMainData = () => dispatch => {
    console.log("메인액션1");
    axios.get('http://localhost/main_react').then(res => {
        const action={
            type:'FETCH_MAIN_DATA',
            payload:res.data
        }
        console.log("메인액션")
        console.log(res.data);
        dispatch(action);
    })
}