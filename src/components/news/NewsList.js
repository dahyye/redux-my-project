import {useState,useEffect,Fragment,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {fetchNewsData} from "../../actions/mainActions";

function formatDate(postdate) {
    if (!postdate || postdate.length !== 8) return postdate;
    const year = postdate.substring(0, 4);
    const month = postdate.substring(4, 6);
    const day = postdate.substring(6, 8);
    return `${year}.${month}.${day}`;
}

function NewsList() {

    const dispatch = useDispatch();
    const fdRef = useRef(null);
    const [fd,setFd] = useState("여행");
    useEffect(()=>{
        dispatch(fetchNewsData(fd))
    },[fd])
    const newsClick=()=> {
        if (fd === "") {
            fdRef.current.focus();
            return
        }
        setFd(fdRef.current.value);

    }

    const newsList=useSelector(state => state.mains.news_data)
    const items = newsList?.items || [];
    console.log("🔍 newsList 전체:", newsList);
    console.log("📰 newsList.items:", newsList?.items);
    console.table(newsList?.items);
    return (
        <Fragment>
            <section className="py-5 bg-light border-bottom">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">네이버 블로그 검색</h2>
                        <p className="text-muted">원하는 키워드로 블로그를 찾아보세요</p>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                        <input
                            type="text"
                            className="form-control w-50"
                            placeholder="검색어를 입력하세요"
                            ref={fdRef}
                            defaultValue={fd}
                        />
                        <button className="btn btn-primary" onClick={newsClick}>
                            검색
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row gy-4">
                        {items.length > 0 ? (
                            items.map((blog, i) => (
                                <div className="col-lg-12" key={i}>
                                    <div className="p-4 rounded shadow-sm bg-white border h-100">

                                        <h5 className="mb-2" style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: blog.title }}></h5>

                                        <p className="text-muted mb-3"
                                            style={{ fontSize: '0.95rem',lineHeight: '1.6',}}
                                            dangerouslySetInnerHTML={{ __html: blog.description }}
                                        ></p>

                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <small className="text-secondary">
                                                👤 <a href={blog.bloggerlink} target="_blank" rel="noreferrer" className="text-decoration-none">
                                                {blog.bloggername}</a>
                                            </small>
                                            <small className="text-muted">
                                                🕒 {formatDate(blog.postdate)}
                                            </small>
                                        </div>

                                        <div className="text-end">
                                            <a href={blog.link} target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm">
                                                <i className="bi bi-box-arrow-up-right me-1"></i>블로그 바로가기
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-muted">블로그 결과가 없습니다.</p>
                        )}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsList;