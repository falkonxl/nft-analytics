import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const nftApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_TOP_NFT_COLL_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TOP_NFT_COLL_KEY    
}

const baseUrl = 'https://top-nft-collections-and-sales.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: nftApiHeaders })

export const nftApi = createApi({
    reducerPath: 'nftApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNiftys: builder.query({
            query: (count) => createRequest(`/collections/1d`)
        }) 
    })
});

export const {
    useGetNiftysQuery,
} = nftApi;