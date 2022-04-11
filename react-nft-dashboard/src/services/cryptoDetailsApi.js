import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_COIN_RANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_COIN_RANKING_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoDetailsApi = createApi({
    reducerPath: 'cryptoDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoDetails: builder.query({
            query: (coindId) => createRequest(`/coin/${coindId}`)            
        })
    })
});

export const {    
    useGetCryptoDetailsQuery
} = cryptoDetailsApi;