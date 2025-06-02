import {FETCH_HOTEL_LIST,FETCH_HOTEL_DETAIL} from "./types";
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

export const fetchHotelDetail = (content_no) => dispatch => {
    axios.get('http://localhost/hotel/detail_react',{
        params:{
            content_no:content_no
        }
    }).then(res => {
        const action={
            type:FETCH_HOTEL_DETAIL,
            payload:res.data
        }
    })
}