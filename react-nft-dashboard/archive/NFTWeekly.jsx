import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom';
import { Select, Typography, Avatar, Card, Layout, Space, Row, Col, Statistic } from 'antd';

import moment from 'moment';

// import { useGetNftsQuery } from '../services/nftApi';

const { Text, Title } = Typography;
const { Option } = Select;


const NFTWeekly = ( {simplified} ) => {
    const count = simplified ? 10 : 100;
    const { data: nftData, isFetching } = useGetNftsQuery(count);
    const [nfts, setNfts] = useState([]);    
    console.log('logging NFT Api data...', nftData);

    if(!nftData?.value) return 'Loading Weekly NFT Stats...'

    return (
        <>
            This Weeks Top Selling NFTs
            <Row gutter={[32, 32]} className="crypto-card-container">
                {nftData?.map((currency) => (
                <Col
                    xs={24}
                    sm={12}
                    lg={6}
                    className="crypto-card"
                    key={currency.uuid}
                >
                {/* Note: Change currency.id to currency.uuid  */}
                <Link key={currency.uuid} to={`/cryptodetails/${currency.uuid}`}>
                    <Card
                        title={`${currency.rank}. ${currency.name}`}
                        extra={<img className="crypto-image" src={currency.iconUrl} />}
                        hoverable
                    >
                        <p>Price: {millify(currency.price)}</p>
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                        <p>Daily Change: {currency.change}%</p>
                    </Card>
                </Link>
                </Col>
                ))}
            </Row>


        </>
    )
}

export default NFTWeekly
