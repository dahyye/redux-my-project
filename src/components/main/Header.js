import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Header() {
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
                        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>

                </div>
            </header>
        </Fragment>
    )
}

export default Header;