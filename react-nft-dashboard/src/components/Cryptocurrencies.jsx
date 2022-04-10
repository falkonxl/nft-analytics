import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom';
import { Card, Input, Layout, Typography, Space, Row, Col, Statistic } from 'antd';
import { SettingOutlined, AudioOutlined  } from '@ant-design/icons';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);
    }, [cryptosList, searchTerm])
    
    console.log('logging Cryptos Api data...', cryptos);
    console.log(`the query count is: ${count}`);

    return (
        <>
            {!simplified && (
                <div className='search-crypto'>
                <Input allowClear addonAfter={<AudioOutlined />} placeholder='Search Cryptos...' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}

            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
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

export default Cryptocurrencies
