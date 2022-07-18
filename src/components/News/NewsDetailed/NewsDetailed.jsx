import './NewsDetailed.css'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getNews} from "../../../services/api";
import {Spinner} from "../../Spinner/Spinner";


export const NewsDetailed = () => {

    const [newsDetailed, setNewsDetailed] = useState({})
    const [load, setLoad] = useState(false);
    const { newsId } = useParams()

    useEffect(() => {
        const fetchNews = async () => {
            setLoad(true)
            const data = await getNews();
            const item = data.find( (item) =>  item.id == newsId   ) ?? {}
            setNewsDetailed(item)
            setLoad(false)
        };
        fetchNews()
    }, []);

    return (
        <>
            <Spinner loading={load}>
                <div className='news-item'>
                    <h2>{newsDetailed?.title}</h2>
                        {newsDetailed?.text ? <div  dangerouslySetInnerHTML={{__html: newsDetailed?.text}} /> : null}
                </div>
            </Spinner>
        </>
    )
}