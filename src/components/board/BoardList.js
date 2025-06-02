import {Fragment,useState,useEffect} from "react";
import {boardList} from "../../actions/boardActions";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function BoardList() {
    // action 연결 => reducer => 데이터를 모아서 store에 저장
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);
    useEffect(() => {
        dispatch(boardList(curpage)) // action => reducer => store
    },[curpage])
    // deps => [] 한번만 수행
    // deps => [useState변수] => 변수가 변경시마다 재호출
    // => re-렌더링
    // Vue / React / Next / Nuxt
    // 데이터 관리 (상태관리) => 데이터가 변경이 되는 HTML에 적용
    //           ---------- 사용변수 : state
    // store에서 부터 출력에 필요한 데이터를 읽어 온다
    const board_list=useSelector(state => state.boards.board_list.list )
    const totalpage=useSelector(state => state.boards.board_list.totalpage)
    const today=useSelector(state => state.boards.board_list.today)
    // 이벤트
    const prev=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
    }
    const next=()=>{
        setCurpage(curpage<totalpage?curpage+1:curpage)
        // useEffect()
    }
    return (
        <Fragment>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Community</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Community</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="comment-form" className="comment-form section">
                <div className="container">

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th className="text-center" width="10%">번호</th>
                            <th className="text-center" width="45%">제목</th>
                            <th className="text-center" width="15%">이름</th>
                            <th className="text-center" width="20%">작성일</th>
                            <th className="text-center" width="10%">조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {board_list && board_list.map((row, index) => (
                            <tr key={index}>
                                <td className="text-center">{row.no}</td>
                                <td>
                                    <Link to={`/board/detail/${row.no}`}>{row.subject}</Link>
                                    {today === row.regdate && <sup style={{ color: 'red', marginLeft: '5px' }}>new</sup>}
                                </td>
                                <td className="text-center">{row.name}</td>
                                <td className="text-center">{row.regdate}</td>
                                <td className="text-center">{row.hit}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <Link to="/board/insert" className="btn btn-success btn-sm">새글 작성</Link>

                        <div>
                            <button className="btn btn btn-secondary btn-sm me-2" onClick={prev}>이전</button>
                            {curpage} page / {totalpage} pages
                            <button className="btn btn btn-secondary btn-sm ms-2" onClick={next}>다음</button>
                        </div>
                    </div>

                </div>
            </section>

        </Fragment>
    )
}

export default BoardList;