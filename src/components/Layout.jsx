import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import React from "react";
import {Main} from "./Main/Main";
import {News} from "./News/News";
import {Navigate, Route, Routes} from "react-router-dom";
import {NewsDetailed} from "./News/NewsDetailed/NewsDetailed";
import {Calendar} from "antd";

export const Layout = () => {
    return (
        <>
            <div className='app-container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/news' element={<News />}  />
                    <Route path="/news/:newsId" element={<NewsDetailed/>} />
                    <Route path='/events' element={<Calendar/>}  />

                    <Route path='/home' element={<Main />}  />

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>

                <Footer />
            </div>
        </>
    )
}