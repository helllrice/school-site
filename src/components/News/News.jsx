import React, {useState, useEffect} from "react";
import './News.css'
import {getNews} from "../../services/api";
import {NewsItem} from "./NewsCard/NewsItem";
import {Spinner} from "../Spinner/Spinner";


export const News = () => {
    const [news, setNews] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            setLoad(true)
            const data = await getNews();
            setNews(data)
            setLoad(false)

        };
        fetchNews()

    }, []);



    return   (
        <Spinner loading={load}>
            <div className='news'>
                 {news.length ? <h2>News</h2> : null}
                <div className="news-box">
                    {news.map((item, index) =>{
                        return (
                            <div key={index}>
                                <NewsItem  item={item}/>
                            </div>
                        )
                     })}
                </div>
            </div>
        </Spinner>
    )
}

