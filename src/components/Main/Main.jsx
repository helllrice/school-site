import React from "react";
import './Main.css';
import {AntdCalendar} from "../Calendar/AntdCalendar";
import {Video} from "../Video/Video";


export const Main = () => {

    return (<>
                <Video />
                <div className="main">
                    <div className="main-container">
                        <h2>Welcome to  school</h2>
                        <p>Academic culture and identity are formed by default or design. Either you design the future or you get whatever happens by default. At McClelland College, we create the framework for our students to design their own future.</p>
                    </div>
                </div>
            </>
    )
};