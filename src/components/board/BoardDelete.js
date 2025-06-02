import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate, Link} from "react-router-dom";
import {useState, useEffect, Fragment, useRef} from "react";
import {boardDelete,boardRest} from "../../actions/boardActions";

function BoardDelete() {

    const {no}= useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [pwd, setPwd] = useState("");
    const pwdRef = useRef(null);
    const cancel=()=>{
        nav(-1)
        //history.back() => histroy.go(-1) => 이전화면
    }

    const del=()=>{
        if(pwd.trim()==="") {
            pwdRef.current.focus();
            return;
        }
        dispatch(boardDelete(no,pwd));
    }

    //결과값 받기
    const delData=useSelector(state => state.boards.result)
    useEffect(()=>{
        if(delData.msg==='yes'){
            alert('삭제되었습니다.')
            nav('/board/list')
            dispatch(boardRest())
        }
        if(delData.msg==='no'){
            alert('비밀번호가 틀렸습니다.')
            setPwd("")
            pwdRef.current.focus();
        }
    },[delData])


    return (
        <Fragment>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Community</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Community</li>
                            <li className="current">Delete</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section id="board-delete" className="section">
                <div className="container">

                    <form>
                        <h4>게시글 삭제하기</h4>

                        <div className="row mb-4">
                            <div className="col-md-6 offset-md-3 form-group">
                                <label>비밀번호</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    ref={pwdRef}
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    placeholder="Enter Password*"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-danger me-2" onClick={del}>
                                삭제
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={cancel}>
                                취소
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </Fragment>
    )
}

export default BoardDelete;