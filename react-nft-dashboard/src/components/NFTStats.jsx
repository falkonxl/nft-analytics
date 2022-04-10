import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom';
import { Select, Typography, Avatar, Card, Layout, Space, Row, Col, Statistic } from 'antd';

import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetNiftysQuery } from '../services/nftApi'

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://via.placeholder.com/150/bdc3c7/FFFFFF?Text=Cryptos.com'

const NFTStats = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    
    const { data: niftysList, isFetching } = useGetNiftysQuery(count);
    const [niftys, setNiftys] = useState([]);
    
    console.log('logging Nifty Api data...', niftysList);
    console.log(`the query count is: ${count}`);
    if(!niftysList) return 'Loading NFT Stats...'
    
    return (
        <>
            <Layout>
            <Title level={2} className="heading">Global NFT Stats</Title>
                <Row gutter={[32, 32]} className="crypto-card-container">            
                    {niftysList.map((nifty,i) => (
                    // <h2>{nifty.collection_name}</h2>
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={nifty.i}>
                        <a href={nifty.collection_url} target="_blank" rel="noreferrer">
                        <Card
                            title={`${nifty.collection_name}`}                    
                            hoverable
                        >
                            <p>Floor: {nifty.floor}</p>
                            <p>Trades: {nifty.trades}</p>
                            <p>Volume: {nifty.volume}</p>
                            <p>Under-rated Collections: {(((parseInt(nifty.volume.replace("$","").replace("M","") * 1000000), 10) / parseInt(nifty.trades, 10)) / parseFloat(nifty.floor.replace("Ξ",""), 10)).toFixed(2)}</p>
                            {/* <p>Adjusted Floor: {parseFloat(nifty.floor.replace("Ξ",""), 10)}</p> */}
                        </Card>
                        </a>
                    </Col>
                    ))}
                </Row>
            </Layout>
        </>
    )
}

export default NFTStats
