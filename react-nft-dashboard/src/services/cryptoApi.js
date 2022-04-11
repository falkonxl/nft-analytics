import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_COIN_RANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_COIN_RANKING_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // query: (count) => createRequest(`/coins?limit=${count}`)
            query: (count) => createRequest(`/coins`)
        }),
        getCryptoDetails: builder.query({
            query: (coindId) => createRequest(`/coin/${coindId}`)            
        }), 
        getCryptoPrices: builder.query({
            // query: (count) => createRequest(`/coins?limit=${count}`)
            query: (coindId) => createRequest(`/coin/${coindId}/price`)
        })        
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoPricesQuery
} = cryptoApi;