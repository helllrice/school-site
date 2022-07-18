import React from "react";
import { Card } from 'antd';
import './NewsItem.css'
import {Link} from "react-router-dom";



export const NewsItem = (props) => {
    const { Meta } = Card;
    const {
        title,
        mainPicturePath,
        id
    } = props.item

    const defaultCover = '/images/news.jpg'

    return (
        <Link to={`/news/${id}`}>
            <Card
                hoverable
                style={{
                    width: 440,
                    minHeight: 530,
                    margin: 20,
                    border: '1px solid #c6c6c6'

                }}
                bodyStyle={{
                    borderBottom: '1px solid #c6c6c6'
                }}
                cover={
                    <img alt="example" src={mainPicturePath || defaultCover}
                         style={{
                             border: '1px solid #c6c6c6',
                             height: 300
                         }}/>
                }
            >
                <Meta title={title}/>
            </Card>
        </Link>
    )
}