import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const nftApiHeaders = {
    'x-rapidapi-host': 'top-nft-collections-and-sales.p.rapidapi.com',
    'x-rapidapi-key': 'UHO2jfxvyCmshYTTLw7b86ajVS7gp1AM8vFjsnjwmOjeH93JR5'    
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