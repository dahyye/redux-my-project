import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHotelDetail} from "../../actions/hotelActions";
import {Link} from "react-router-dom";

function HotelDetail(){
    return (
        <div>
            <h1>호텔 상세</h1>
        </div>
    )
}

export default HotelDetail;