import { useState } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../../actions/mainActions";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const dispatch = useDispatch();

    const navigator = useNavigate();
    
    const [error,setError] = useState(null);


    const handleLogin = () => {
        dispatch(fetchLogin(id, pwd))
            .then((res) => {
                toast.success(res);
                navigator("/") //로그인 성공 시 메인으로 이동
            })
            .catch((error) => {
                toast.error(error);
                //오류처리
            })
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="border p-4 shadow rounded bg-light" style={{ width: '300px' }}>
                <h4 className="text-center mb-3">로그인</h4>
                <input type="text" value={id} onChange={e => setId(e.target.value)}
                       className="form-control mb-2" placeholder="아이디" />
                <input type="password" value={pwd} onChange={e => setPwd(e.target.value)}
                       className="form-control mb-3" placeholder="비밀번호" />
                <button className="btn btn-primary w-100" onClick={handleLogin}>로그인</button>
            </div>
        </div>
    )
}
export default Login;
