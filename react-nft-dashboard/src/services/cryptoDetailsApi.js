import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '591ef59e5fmsh9674f0eac48801dp15254bjsnbbbeda81ef4d'    
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