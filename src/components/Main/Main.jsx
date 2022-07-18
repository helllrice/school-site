import React from "react";
import './Main.css';
import {Video} from "../Video/Video";
import {MainPopup} from "./MainPopup/MainPopup";


export const Main = () => {

    return (<>
                <Video />
                <div className="main">
                    <div className="main-header">
                        <span>To get the very best from our students</span>
                        <h2>Welcome to  school</h2>
                        <p>Academic culture and identity are formed by default or design. Either you design the future or you get whatever happens by default. At McClelland College, we create the framework for our students to design their own future.</p>
                    </div>
                    <div className="main-info">
                        <div className="main-info-left">
                            <div className="main-item">
                                <span className="main-personal">Personalised Learning</span>
                                <img src="/images/main-img/home-link1.jpg" alt="main-img"/>
                                <span className="arrow-link">Explore
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.9 44.7">
                                    <path d="M0,22.1a2,2,0,0,0,2,2H68.4L51.2,41.3a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L74.3,23.8a1.9,1.9,0,0,0,0-2.8L54,.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8L67.8,20.1H2A2,2,0,0,0,0,22.1Z"></path>
                                </svg>
                            </span>
                            </div>
                            <div className="main-item">
                                <span className="main-map">MAP</span>
                                <img src="/images/main-img/home-link2.jpg" alt="main-img"/>
                                <span className="arrow-link right">Explore
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.9 44.7">
                                    <path d="M0,22.1a2,2,0,0,0,2,2H68.4L51.2,41.3a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L74.3,23.8a1.9,1.9,0,0,0,0-2.8L54,.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8L67.8,20.1H2A2,2,0,0,0,0,22.1Z"></path>
                                </svg>
                            </span>
                            </div>
                        </div>
                        <div className="main-info-right">
                            <div className="main-item">
                                <span className="main-epp">EPP</span>
                                <img src="/images/main-img/home-link3.jpg" alt="main-img"/>
                                <span className="arrow-link right">Explore
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.9 44.7">
                                    <path d="M0,22.1a2,2,0,0,0,2,2H68.4L51.2,41.3a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L74.3,23.8a1.9,1.9,0,0,0,0-2.8L54,.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8L67.8,20.1H2A2,2,0,0,0,0,22.1Z"></path>
                                </svg>
                            </span>
                            </div>
                            <div className="main-item">
                                <span className="main-international">International Program</span>
                                <img src="/images/main-img/home-link4.jpg" alt="main-img"/>
                                <span className="arrow-link">Explore
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.9 44.7">
                                    <path d="M0,22.1a2,2,0,0,0,2,2H68.4L51.2,41.3a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L74.3,23.8a1.9,1.9,0,0,0,0-2.8L54,.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8L67.8,20.1H2A2,2,0,0,0,0,22.1Z"></path>
                                </svg>
                            </span>
                            </div>
                        </div>
                        </div>
                </div>
                <MainPopup />
            </>
    )
};