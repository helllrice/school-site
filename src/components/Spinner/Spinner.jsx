import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import './Spinner.css'

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 50,
            position: "absolute",
            top: '50%',
            left: '50%',
            zIndex: 99,
            color: '#34135b'
        }}

    />
);

export const Spinner = ({loading, children}) => <div className='spinner-wrapper'>
    <Spin
        className='spinner'
        spinning={loading}
        indicator={antIcon}
        size={"large"}
    >
        {children}
    </Spin>;
</div>