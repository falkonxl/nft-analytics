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

// const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
const demoImage = 'https://via.placeholder.com/150/bdc3c7/FFFFFF?Text=Cryptos.com'

const NFTStats = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    
    const { data: niftysList, isFetching } = useGetNiftysQuery(count);
    const [niftys, setNiftys] = useState([]);
    
    console.log('logging Nifty Api data...', niftysList);
    console.log(`the query count is: ${count}`);
    if(!niftysList) return 'Loading NFT Stats...'
    
    return (
        <Row gutter={[32, 32]} className="crypto-card-container">
            <h1>NFT Stats</h1>
            {niftysList.map((nifty,i) => (
            <h2>{nifty.collection_name}</h2>
            ))}
        </Row>
    )
}

export default NFTStats
