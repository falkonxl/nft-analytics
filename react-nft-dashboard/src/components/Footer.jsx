import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

const Footer = () => {
    return (
        <div className="footer">
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Crypto Online <br />
                All rights reverved.
            </Typography.Title>
            <Space>
                <Link to="/">home</Link>
                <Link to="/exchanges">exchanges</Link>
                <Link to="/news">news</Link>
            </Space>
        </div>
    )
}

export default Footer
