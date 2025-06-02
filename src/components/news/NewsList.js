import {useState,useEffect,Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";

function NewsList() {
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>
                                    네이버뉴스 검색
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type={"text"} size={"25"} className={"input-group-sm"}

                            />
                            <button className={"btn-sm btn-primary"} >검색</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsList;