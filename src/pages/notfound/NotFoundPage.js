import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from "../../assets/img/4457.svg"
import "./NotFound.css"

const NotFoundPage = () => {

    return (
        <div className="container">
            <div className="header1"><h4>Oops! Sorry Page Not Found.</h4></div>
            <div className='img1'><img src={PageNotFound} style={{ pointerEvents: "none" }} height="100%" width="100%" /></div>
            <div><p className='img__footer'>
                <Link to="/" className='footer__link'>Go Back </Link>
            </p></div>
        </div>
    )
}

export default NotFoundPage