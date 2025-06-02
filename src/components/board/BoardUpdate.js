import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState, useRef, Fragment, use} from "react";
import {boardUpdate, boardUpdateOk,boardRest} from "../../actions/boardActions";
import {useNavigate, useParams} from "react-router-dom";
function BoardUpdate() {
    const {no}=useParams();
    const dispatch = useDispatch(); // action함수 호출
    const nav = useNavigate(); // 화면 이동 , redirect
    const nameRef = useRef(null); // 태그를 제어할때 사용
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const pwdRef = useRef(null);

    const [name, setName] = useState(""); // 데이터를 저장하는 능력이 있는 변수
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [pwd, setPwd] = useState("");
    /////////////////////
    useEffect(() => {
        dispatch(boardUpdate(no));//store에 저장
        
    }, [no]);
    const ud=useSelector(state => state.boards.board_update);
    useEffect(()=>{
        setName(ud.name);
        setSubject(ud.subject);
        setContent(ud.content);
    })
    ///////////////////// 값 채우기


    const update=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus();
            return;
        }
        else if(subject.trim()==="")
        {
            subjectRef.current.focus();
            return;
        }
        else if(content.trim()==="")
        {
            contentRef.current.focus();
            return;
        }
        else if(pwd.trim()==="")
        {
            pwdRef.current.focus();
            return;
        }

        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd,
            no:no
        }
        dispatch(boardUpdateOk(no,params));

    }
    const result=useSelector(state => state.boards.result)
    // 조건(X) 항상 밖에 존재
    if(result && result.msg==='yes'){
        nav('/board/detail/'+no)
        dispatch(boardRest());
    }

    // 이벤트 처리 => 익명의 함수
    // function Aaa(){}
    const cancel=()=>{
        nav('/board/detail/'+no)
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
                            <li className="current">Update</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section id="board-update" className="section">
                <div className="container">

                    <form>

                        <div className="row mb-3">
                            <div className="col-md-6 form-group">
                                <label>이름</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    ref={nameRef}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Your Name*"
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>제목</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    ref={subjectRef}
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    placeholder="Subject*"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col form-group">
                                <label>내용</label>
                                <textarea
                                    className="form-control"
                                    rows="6"
                                    ref={contentRef}
                                    onChange={(e) => setContent(e.target.value)}
                                    value={content}
                                    placeholder="Your Content*"
                                />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 form-group">
                                <label>비밀번호</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    ref={pwdRef}
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    placeholder="Password*"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-success me-2" onClick={update}>
                                수정
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
export default BoardUpdate;