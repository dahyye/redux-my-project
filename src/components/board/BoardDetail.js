import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate, Link} from "react-router-dom";
import {useState,useEffect,Fragment} from "react";
import {boardDetail} from "../../actions/boardActions";

function BoardDetail() {
    const {no}= useParams(); // request.getParameter("")
    // 무조건 string => 비교 == , ===(데이터형)
    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(boardDetail(no));
    },[])
    // store에서 필요데이터 가지고 온다 : useSelector()
    const detail = useSelector(state => state.boards.board_detail);
    console.log(detail)
    return (
        <Fragment>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Community</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Community</li>
                            <li className="current">Detail</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="board-detail" className="section">
                <div className="container">

                        <div className="row mb-3">
                            <div className="col-md-6 form-group">
                                <label>번호</label>
                                <input type="text" className="form-control" value={detail.no} readOnly />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>작성일</label>
                                <input type="text" className="form-control" value={detail.regdate} readOnly />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 form-group">
                                <label>작성자</label>
                                <input type="text" className="form-control" value={detail.name} readOnly />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>조회수</label>
                                <input type="text" className="form-control" value={detail.hit} readOnly />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>제목</label>
                            <input type="text" className="form-control" value={detail.subject} readOnly />
                        </div>

                        <div className="mb-3">
                            <label>내용</label>
                            <div
                                className="p-3 bg-light border rounded" style={{
                                    whiteSpace: 'pre-wrap',
                                    height: '300px',
                                    overflowY: 'auto'
                                }}
                            >
                                {detail.content}
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <Link to={`/board/update/${no}`} className="btn btn-success btn-sm me-2">수정</Link>
                            <Link to={`/board/delete/${no}`} className="btn btn-danger btn-sm me-2">삭제</Link>
                            <Link to="/board/list" className="btn btn btn-secondary btn-sm">목록</Link>
                        </div>
                </div>
            </section>
        </Fragment>
    )
}
export default BoardDetail;