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

export const fetchNewsData= (fd) => dispatch => {
    console.log("패치뉴스데이터");
    axios.get('http://localhost:3355/news/list',{
        params: {
            query:fd
        }
    }).then(res=>{
        const action={
            type:'NEWS_LIST',
            payload:res.data
        }
        console.log("news액션");
        console.log("fd : "+fd);
        console.log(res.data)
        dispatch(action)
    })
}