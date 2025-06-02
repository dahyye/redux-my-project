import {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import {fetchMainData} from "../../actions/mainActions";
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        new Swiper('.init-swiper', {
            loop: true,
            speed: 600,
            autoplay: {delay: 5000},
            slidesPerView: 'auto',
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
        dispatch(fetchMainData());
    },[])
    const mainData=useSelector(state => state.mains.main_data);
    console.log(mainData)
    return (
        <Fragment>
            <main className="main">
                <section id="slider" className="slider section dark-background">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="swiper init-swiper">

                            <div className="swiper-wrapper">
                                {
                                    mainData.hList && mainData.hList.map((hotel) =>
                                        <div className="swiper-slide"
                                             style={{"backgroundImage":`url(${hotel.image})`}}>
                                            <div className="content">
                                                <h2><a href="single-post.html">{hotel.title}</a></h2>
                                                <p style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>
                                                    {hotel.overview}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }


                            </div>

                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>

                            <div className="swiper-pagination"></div>
                        </div>

                    </div>

                </section>

                <section id="trending-category" className="trending-category section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="container" data-aos="fade-up">
                            <div className="row g-5">
                                <div className="col-lg-4">

                                    <div className="post-entry lg">
                                        <a href="blog-details.html"><img
                                            src={mainData.fvo && "https://www.menupan.com" + mainData.fvo.poster}
                                            className="img-fluid"/></a>
                                        <div className="post-meta">
                                            <span className="date">타입</span>
                                            <span
                                                className="mx-1">:</span><span>{mainData.fvo && mainData.fvo.type}</span>
                                            <span className="date" style={{marginLeft: '20px'}}>평점</span>
                                            <span
                                                className="mx-1">:</span><span>{mainData.fvo && mainData.fvo.score}</span>

                                        </div>
                                        <h2><a href="blog-details.html">{mainData.fvo && mainData.fvo.name}</a></h2>
                                        <p className="mb-4 d-block">{mainData.fvo && mainData.fvo.content}</p>

                                        <div className="d-flex align-items-center author">
                                            <div className="name">
                                                <h3 className="m-0 p-0">{mainData.fvo && mainData.fvo.address}</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-8">
                                    <div className="row g-5">
                                        <div className="col-lg-4 border-start custom-border">
                                            {
                                                mainData.h1List && mainData.h1List.map((hotel) =>
                                                    <div className="post-entry">
                                                        <a href="blog-details.html"><img src={hotel.image}
                                                                                         alt="" className="img-fluid"/></a>
                                                        <div className="post-meta"><span
                                                            className="date">{hotel.address}</span></div>
                                                        <h2><a href="blog-details.html">{hotel.title}</a>
                                                        </h2>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-lg-4 border-start custom-border">
                                            {
                                                mainData.h2List && mainData.h2List.map((hotel) =>
                                                    <div className="post-entry">
                                                        <a href="blog-details.html"><img src={hotel.image}
                                                                                         alt="" className="img-fluid"/></a>
                                                        <div className="post-meta"><span
                                                            className="date">{hotel.address}</span></div>
                                                        <h2><a href="blog-details.html">{hotel.title}</a>
                                                        </h2>
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <div className="col-lg-4">

                                            <div className="trending">
                                                <h3>BEST RESTAURANT</h3>
                                                <ul className="trending-post">
                                                    {
                                                        mainData.fList && mainData.fList.map((food) =>
                                                            <li>
                                                                <a href="blog-details.html">
                                                                    <span className="number">1</span>
                                                                    <h3>{food.name}</h3>
                                                                    <span className="author">{food.address}</span>
                                                                </a>
                                                            </li>
                                                        )
                                                    }

                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
            </main>
        </Fragment>
    )
}

export default Home;