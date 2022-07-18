import React from "react";
import './Header.css'
import { Navigation } from "../Navigation/Navigation";
import {Search} from "../Search/Search";



export const Header = () => {
    return (
        <div className='header'>
            <div className="header-box">
                <div className="header-logo">
                    <img src="/images/logo.png" alt="logo"/>
                </div>
                <Navigation />
                <Search />
            </div>
        </div>


    )
}



