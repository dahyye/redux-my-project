import axios from 'axios';
import { FETCH_MAIN_DATA } from '../actions/types';
import {response} from "express";
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

export const fetchLogin = (id, pwd) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8080/login', {
            id,
            pwd
        }, { withCredentials: true }); // 세션 쿠키 포함

        dispatch({
            type: 'FETCH_LOGIN_SUCCESS',
            payload: {
                userId: id,
                message: response.data
            }
        });

        alert(response.data);
    } catch (err) {
        dispatch({
            type: 'FETCH_LOGIN_FAILURE',
            payload: err.response?.data || '로그인 실패'
        });

        alert(err.response?.data || '로그인 실패');
    }
};

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