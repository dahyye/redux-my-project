import {useState, useEffect, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHotelDetail} from "../../actions/hotelActions";
import {Link, useNavigate, useParams} from "react-router-dom";
import HotelMap from "./HotelMap";

function HotelDetail(){
    const {content_id} = useParams();
    const dispatch = useDispatch();
    const nav=useNavigate();

    useEffect(()=>{
        dispatch(fetchHotelDetail(content_id));
    },[])
    const hotelDetail=useSelector(state=>state.hotels.hotel_detail);
    const listClick=()=>{
        nav("/hotel/list")
    }

    console.log(hotelDetail);
    return (
        <Fragment>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Hotel Detail</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Hotel Detail</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="blog-details" class="blog-details section">
                <div class="container">

                    <article class="article">

                        <div className="post-img text-center">
                            <img
                                src={hotelDetail?.image}
                                className="img-fluid rounded shadow-sm"
                                style={{ maxWidth: '800px', width: '100%' }} // ✅ max-width 제한 + 반응형
                                alt="호텔 이미지"
                            />
                        </div>

                        <h2 class="title">{hotelDetail && hotelDetail.title}</h2>

                        <div className="meta-top mb-4">
                               <ul className="list-inline text-muted">
                                 <li className="list-inline-item me-4">
                                   <i className="bi bi-person-fill me-1"></i> 수용 인원: {hotelDetail?.accom_count}
                                 </li>
                                 <li className="list-inline-item me-4">
                                   <i className="bi bi-door-open me-1"></i> 객실 수: {hotelDetail?.room_count}
                                 </li>
                                 <li className="list-inline-item ">
                                   <i className="bi bi-telephone me-1"></i> 연락망: {hotelDetail?.info_center}
                                 </li>
                               </ul>
                        </div>

                        <div class="content">
                            <p className="lh-lg">
                                {hotelDetail && hotelDetail.overview}
                            </p>


                            <div className="bg-light rounded p-3 mb-5 border">
                                <h5 className="fw-semibold border-bottom pb-2 mb-3">객실 정보</h5>

                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">
                                        <strong>체크인:</strong> {hotelDetail?.check_in_time || '정보 없음'}
                                    </li>
                                    <li className="mb-2">
                                        <strong>체크아웃:</strong> {hotelDetail?.check_out_time || '정보 없음'}
                                    </li>
                                    <li className="mb-2">
                                        <strong>주차 여부:</strong> {hotelDetail?.parking || '정보 없음'}
                                    </li>
                                    <li>
                                        <strong>부가 시설:</strong> {hotelDetail?.subfacility || '정보 없음'}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            hotelDetail && hotelDetail.address &&
                            <div className="bg-light rounded p-3 mb-4 border">
                                <h5 className="fw-semibold border-bottom pb-2 mb-3">위치 정보</h5>

                                <div style={{ height: '300px', overflow: 'hidden', borderRadius: '8px' }}>
                                    <HotelMap address={hotelDetail.address} name={hotelDetail.title} />
                                </div>
                            </div>

                        }
                            <div className="meta-bottom d-flex justify-content-end mt-4">
                                <button className="btn btn-outline-primary btn-sm" onClick={listClick}>
                                    <i className="bi bi-arrow-left"></i> 목록으로 돌아가기
                                </button>
                            </div>

                    </article>

                </div>
            </section>
        </Fragment>
    )
}

export default HotelDetail;