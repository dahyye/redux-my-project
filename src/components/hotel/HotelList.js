import {useState, useEffect, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHotelList} from "../../actions/hotelActions";
import {Link} from "react-router-dom";

function HotelList(){
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);
    useEffect(() => {
        dispatch(fetchHotelList(curpage));
    },[curpage])

    const hotelList=useSelector(state => state.hotels.hotel_list)
    console.log(hotelList)
    const prev=()=>{
        setCurpage(hotelList.startPage-1)
    }
    const next=()=>{
        setCurpage(hotelList.endPage+1)
    }
    const pageChange=(page)=>{
        setCurpage(page);
    }

    let row=[]

    if (hotelList.startPage > 1) {
        row.push(<li className="page-item">
            <a className="page-link" onClick={prev}>Prev <i
                className="fa fa-angle-double-left" aria-hidden="true"></i></a>
        </li>)
    }
    for (let i = hotelList.startPage; i <= hotelList.endPage; i++) {
        if(i===hotelList.curpage)
        {
            row.push(<li className="page-item active"><a className="page-link" onClick={()=>pageChange(i)}>{i}</a></li>)
        }
        else
        {
            row.push(<li className="page-item"><a className="page-link" onClick={()=>pageChange(i)}>{i}</a></li>)
        }

    }
    if (hotelList.endPage < hotelList.totalpage) {
        row.push(<li className="page-item">
            <a className="page-link" onClick={next}>Next <i
                className="fa fa-angle-double-right" aria-hidden="true"></i></a>
        </li>)
    }

    return (
        <Fragment>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Hotel List</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Hotel List</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="blog-posts" className="blog-posts section">

                <div className="container">
                    <div className="row gy-4">

                        {
                            hotelList.list && hotelList.list.map((hotel) =>
                            <div className="col-lg-6">
                                <article className="position-relative h-100">

                                    <div className="post-img position-relative overflow-hidden">
                                        <img src={hotel.image} className="img-fluid" alt=""/>
                                        <span className="post-date">{hotel.address}</span>
                                    </div>

                                    <div className="post-content d-flex flex-column">

                                        <h3 className="post-title">{hotel.title}</h3>

                                        <div className="meta d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-geo-alt"></i> <span className="ps-2">{hotel.info_center}</span>
                                            </div>

                                        </div>

                                        <p style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,   // 3줄까지 보여줌 (2로 줄이면 2줄)
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                            {hotel.overview}
                                        </p>

                                        <hr/>

                                        <Link to={"/hotel/detail/"+hotel.content_id}
                                           className="readmore stretched-link"><span>Read More</span><i
                                            className="bi bi-arrow-right"></i></Link>

                                    </div>

                                </article>
                            </div>
                            )
                        }
                    </div>
                    <div className="row" style={{"marginTop":"20px"}}></div>
                    <div className="col-12">
                        <div className="pagination-area d-sm-flex mt-15 justify-content-between align-items-center">
                            <nav aria-label="#">
                                <ul className="custom-pagination">
                                    {row}
                                </ul>
                            </nav>
                            <div className="page-status ms-3">
                                <p className="mb-0">Page {hotelList.curpage} of {hotelList.totalpage} results</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </Fragment>
    )
}

export default HotelList;