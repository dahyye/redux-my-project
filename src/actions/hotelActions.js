import {FETCH_HOTEL_LIST,FETCH_HOTEL_DETAIL,FETCH_HOTEL_FIND} from "./types";
import axios from "axios";

export const fetchHotelList = (page) => dispatch => {
    axios.get('http://localhost/hotel/list_react',{
        params:{
            page:page
        }
    }).then(res => {
        const action={
            type:FETCH_HOTEL_LIST,
            payload:res.data
        }
        dispatch(action);
    })
}

export const fetchHotelDetail = (content_id) => dispatch => {
    console.log('보내는 content_id:', content_id);
    axios.get('http://localhost/hotel/detail_react',{
        params:{
            content_id:content_id
        }
    }).then(res => {
        const action={
            type:FETCH_HOTEL_DETAIL,
            payload:res.data
        }
        dispatch(action);
        console.log(res.data);
    })
}

export const fetchHotelFind = (hd) => dispatch => {
    axios.get('http://localhost:3355/hotel/find',{
        params: {
            hd: hd
        }
    }).then(res => {
        const action={
            type:FETCH_HOTEL_FIND,
            payload:res.data
        }
        dispatch(action);
    })
}