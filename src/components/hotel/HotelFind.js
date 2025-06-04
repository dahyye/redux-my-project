import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState, useRef, Fragment} from "react";
import {fetchHotelFind} from "../../actions/hotelActions";

function HotelFind(){

    const dispatch=useDispatch();
    const [hd,setHd]=useState("라마다");

    const hdRef = useRef(null);

    useEffect(()=>{
        dispatch(fetchHotelFind(hd));
    },[hd])
    const hotelList=useSelector(state=>state.hotels.find_list);
    const find=(e)=>{
        if(hd==="")
        {
            hdRef.current.focus();
            return
        }
        setHd(hdRef.current.value);

    }
    console.log("hotelList 결과값은? ")
    console.log(hotelList);



    return (
        <Fragment>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Hotel Find</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Hotel Find</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="blog-posts" className="blog-posts section">

                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type={"text"} size={"25"} className={"input-group-sm"}
                                   ref={hdRef}
                            />
                            <button className={"btn-sm btn-primary"} onClick={find}>검색</button>
                        </div>
                    </div>
                    <div className="row" style={{"marginTop":"20px"}}></div>
                    <div className="row gy-4">

                        {
                            hotelList && hotelList.map((hotel) =>
                                <div className="col-lg-6">
                                    <article className="position-relative h-100">

                                        <div className="post-img position-relative overflow-hidden">
                                            <img src={hotel.FIRST_IMAGE} className="img-fluid" alt=""/>
                                            <span className="post-date">{hotel.ADDR1}</span>
                                        </div>

                                        <div className="post-content d-flex flex-column">

                                            <h3 className="post-title">{hotel.TITLE}</h3>

                                            <div className="meta d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-geo-alt"></i> <span className="ps-2">{hotel.TEL}</span>
                                                </div>

                                            </div>

                                            <p style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,   // 3줄까지 보여줌 (2로 줄이면 2줄)
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {hotel.OVERVIEW}
                                            </p>

                                            <hr/>

                                            <Link to={"/hotel/detail/"+hotel.CONTENT_ID}
                                                  className="readmore stretched-link"><span>Read More</span><i
                                                className="bi bi-arrow-right"></i></Link>

                                        </div>

                                    </article>
                                </div>
                            )
                        }
                    </div>

                </div>

            </section>

        </Fragment>
    )
}

export default HotelFind;