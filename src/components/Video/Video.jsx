import React from "react";
import './Video.css'

export const Video = () => {
    return (
        <>
            <div className="video-wrapper">
                <iframe width="100%" height="720"
                        src="https://www.youtube.com/embed/wxKwD3bcTYs?autoplay=1&amp;modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;loop=1&amp;mute=1&amp;playlist=wxKwD3bcTYs"
                        allowFullScreen="">
                </iframe>
            </div>

        </>
    )
}