import {useDispatch, useSelector} from 'react-redux'
import {useState,useEffect,Fragment} from "react";
import {fetchYouTubeFind} from "../../actions/youtubeActions";
import {Link} from "react-router-dom";

function YoutubeFind(){
    const dispatch=useDispatch();
    const [fd,setFd]=useState("숙소");
    useEffect(()=>{
        dispatch(fetchYouTubeFind(fd));
    },[fd])
    const movie=useSelector(state=>state.youtubes.movie_data);
    console.log(movie && movie)
    return (
        <Fragment>
            <section className="py-5 bg-light border-bottom">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">YouTube 영상 검색</h2>
                        <p className="text-muted">관련된 영상들을 확인해보세요</p>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                        <input
                            type="text"
                            className="form-control w-50"
                            placeholder="검색어를 입력하세요"
                            value={fd}
                            onChange={(e) => setFd(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={() => dispatch(fetchYouTubeFind(fd))}>
                            검색
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row gy-4">
                        {
                            movie && movie.map((m, i) => (
                                <div className="col-lg-6" key={i}>
                                    <div className="team-member d-flex align-items-start p-3 rounded shadow-sm bg-white h-100">
                                        <div
                                            className="pic me-3"
                                            style={{ width: '160px', height: '90px', flexShrink: 0 }}
                                        >
                                            <iframe
                                                src={`https://www.youtube.com/embed/${m.id.videoId}`}
                                                width="160"
                                                height="90"
                                                style={{ borderRadius: '8px' }}
                                                allowFullScreen
                                            ></iframe>
                                        </div>

                                        <div className="member-info">
                                            <h5 className="mb-1">{m.snippet.title}</h5>
                                            <small className="text-muted d-block mb-2">{m.snippet.channelTitle}</small>
                                            <p className="mb-2" style={{ fontSize: '0.9rem' }}>
                                                {m.snippet.description?.substring(0, 70)}...
                                            </p>
                                            <div className="social">
                                                <a href={`https://www.youtube.com/watch?v=${m.id.videoId}`} target="_blank" rel="noreferrer">
                                                    <i className="bi bi-youtube fs-5 me-2"></i>
                                                </a>
                                                <a href={`https://www.youtube.com/channel/${m.snippet.channelId}`} target="_blank" rel="noreferrer">
                                                    <i className="bi bi-person-circle fs-5"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default YoutubeFind