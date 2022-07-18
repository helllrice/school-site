import './AntdCalendar.css';
import React from 'react';
import { Badge, Calendar } from 'antd';


const getListData = (value) => {
    let listData;

    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'Open Day.',
                },

            ];
            break;

        case 10:
            listData = [
                {
                    type: 'warning',
                    content:'entrance tests',
                },

            ];
            break;

        case 15:
            listData = [
                {
                    type: 'success',
                    content: 'basketball competition',
                },
            ];
            break;

        default:
    }

    return listData || [];
};

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export const AntdCalendar = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    return <div className='calendar-wrapper'>
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
           </div>
};