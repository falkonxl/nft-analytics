import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// Custom components import
import { Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails, NFTStats, Footer } from './components';

// Custom styling
import './App.css'

const App = () => {
    return (
        <Layout>
        <div className="app">            

            <div className="main">
                <Layout>
                    <div className="routes">
                        <Router>       
                            <div className="navbar">                
                                <Navbar />
                            </div>

                            <Routes>                        
                                <Route path='/' element={<HomePage />} />                                                                   
                                <Route path='/exchanges' element={<Exchanges />} />
                                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                                <Route path='/nftstats' element={<NFTStats />} />                                
                                <Route path='/news' element={<News />} />                                
                                <Route path='/cryptodetails/:coinId' element={<CryptoDetails />} />
                            </Routes>
                            
                        </Router>
                    </div>
                </Layout>
            </div>
          
            
        </div>
        </Layout>
    )
}

export default App
