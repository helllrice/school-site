import React from "react";
import './Footer.css';
import {GoogleMap} from "../Google-map/GoogleMap";

export const Footer = () => {


    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-box">
                    <div className="footer-item">
                        <h2>Contacts</h2>
                        <p>Phone:
                            <a href="/"> 03 9789 4544</a>
                        </p>
                        <p>Address:
                            <a href="/"> 31 Belar Avenue, Frankston VIC 3199</a>
                        </p>
                        <div className="footer-icons">
                            <p>Social media</p>
                            <a href="#">
                                <img src="/images/icons/facebook.png" alt="facebook"/>
                            </a>
                            <a href="#">
                                <img src="/images/icons/telegram.png" alt="telegram"/>
                            </a>
                            <a href="#">
                                <img src="/images/icons/instagram.png" alt="telegram"/>
                            </a>
                            <a href="#">
                                <img src="/images/icons/youtube.png" alt="youtube"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-item">
                        <GoogleMap />
                    </div>
                    <div className="footer-item">
                        <img src="/images/logo.png" alt="" width='300px' height='300px'/>
                    </div>
                </div>
            </div>
        </div>
    )
};