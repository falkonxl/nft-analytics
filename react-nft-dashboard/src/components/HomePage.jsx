import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom';
import { Card, Layout, Typography, Space, Row, Col, Statistic } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined,  FundOutlined, MenuOutlined, ArrowUpOutlined } from '@ant-design/icons';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Exchanges, Cryptocurrencies, News } from '../components';

const { Title } = Typography;

const HomePage = () => {
    const count = 10;
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log('logging Api data...', data);
    if(isFetching) return 'Loading...';
    const gridStyle = {
        width: '200',
        height: '150',
        padding: '10px',
      };

    return (
        <>
            <Layout>
                <Title level={2} className="heading">Global Crypto Stats</Title>
                <Row>
                    <Col span={9}>                        
                        <Card.Grid style={gridStyle}>
                            <Statistic
                            title="Total Cryptocurrencies"
                            value={millify(globalStats.total)}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<FundOutlined />}
                            />
                        </Card.Grid>
                    </Col>
                    <Col span={9}>
                        <Card.Grid style={gridStyle}>
                                <Statistic
                                title="Total Exchanges"
                                value={millify(globalStats.totalExchanges)}
                                precision={0}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<FundOutlined />}
                                />
                        </Card.Grid>                    
                    </Col>
                    <Col span={9}>
                        <Card.Grid style={gridStyle}>
                                <Statistic
                                title="Total Market Cap"
                                value={millify(globalStats.totalMarketCap)}
                                precision={0}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<FundOutlined />}
                                />
                        </Card.Grid>                                        
                    </Col>
                    <Col span={9}>
                        <Card.Grid style={gridStyle}>
                            <Statistic
                            title="Total 24h Volume"
                            value={millify(globalStats.total24hVolume)}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<FundOutlined />}
                            />
                        </Card.Grid>                                                   
                    </Col>
                    <Col span={9}>
                        <Card.Grid style={gridStyle}>
                            <Statistic
                            title="Total Markets"
                            value={millify(globalStats.totalMarkets)}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<FundOutlined />}
                            />
                        </Card.Grid>                    
                    </Col>
                </Row>

                <div className='home-heading-container'>
                    <Title level={2} className="home-title">Top 10 Cryptocurrencies In The World</Title>
                    <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More...</Link></Title>
                </div>
                <Cryptocurrencies simplified />

                <div className='home-heading-container'>
                    <Title level={2} className="home-title">Latest Crypto News</Title>
                    <Title level={3} className="show-more"><Link to="/news">Show More...</Link></Title>
                </div>
                <News simplified />

            </Layout>
        </>
    )
}

export default HomePage
