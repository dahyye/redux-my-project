import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLogout} from "../../actions/mainActions";
import {useNavigate} from "react-router-dom";

function Header() {
    const isLoggedIn = useSelector(state => state.mains.isLoggedIn);
    const userId = useSelector(state => state.mains.userId);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(fetchLogout());
        navigate('/');
    }

    return (
        <Fragment>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container position-relative d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                        <h1 className="sitename">Redux Project</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link to="/" className="active">HOME</Link></li>
                            <li className="dropdown"><a href="#"><span>HOTEL</span> <i
                                className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><Link to="/hotel/list">TOTAL LIST</Link></li>
                                    <li><a href="/hotel/find">FIND</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="#"><span>RESTAURANT</span> <i
                                className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="category.html">TOTAL LIST</a></li>
                                    <li><a href="category.html">FIND</a></li>
                                </ul>
                            </li>
                            <li><a href="/youtube/find">YOUTUBE</a></li>
                            <li><a href="/news/list">NEWS</a></li>
                            <li><Link className="nav-link" to={"/board/list"}>COMMUNITY</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <div className="header-social-links">
                        { isLoggedIn ?
                            (
                              <div>  
                                <span>{userId}님 로그인 중</span>
                                <button className={"btn btn-sm btn-outline-dark ms-2"} onClick={handleLogout}>로그 아웃</button>
                              </div>
                            )
                            :
                            (<Link to="/login" className="btn btn-primary" style={{ color: '#fff' }}>로그인</Link>)
                        }

                    </div>

                </div>
            </header>
        </Fragment>
    )
}

export default Header;