import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined,  FundOutlined, MenuOutlined, ArrowUpOutlined, MailOutlined } from '@ant-design/icons';
// import icon from '../components/images/logo.png'
import icon from './images/logo.png'

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">

                <Menu mode="inline" style={{ width: 256 }}>                    
                <Avatar source={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">NFT Dashboard</Link>
                </Typography.Title>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    {/* <Menu.Item key="2"  icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item> */}

                    {/* <Menu.Item key="4"  icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>                     */}

                    <Menu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.ItemGroup key="g1" title="NFT Stats">
                            <Menu.Item key="2">                                
                                <Link to="/nftstats">Top NFT Collections Today</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/nftstats">Top NFT Sales Today</Link>                                
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/nftstats">Top NFT Sales This Week</Link>                                
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/nftstats">Top NFT Collections This Month</Link>                                
                            </Menu.Item>                            
                            <Menu.Item key="6">
                                <Link to="/nftstats">Top NFT Collections This Week</Link>                                
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="NFT Metadata">
                            <Menu.Item key="7">NFT Contract Address</Menu.Item>
                            <Menu.Item key="8">NFT Token Id</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Menu>
            </div>
            
        </div>
    );
    
}

export default Navbar
