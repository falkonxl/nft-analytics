import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const nftHeaders = {
    'x-rapidapi-host': 'top-nft-sales.p.rapidapi.com',
    'x-rapidapi-key': 'UHO2jfxvyCmshYTTLw7b86ajVS7gp1AM8vFjsnjwmOjeH93JR5'
}

const baseUrl = 'https://top-nft-sales.p.rapidapi.com/collections'
const createRequest = (url) => ({ url, headers: nftHeaders })
// console.log('logging url...', createRequest)

export const nftApi = createApi({    
    reducerPath: 'nftApi',    
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNfts: builder.query({
            query: (count) => createRequest(`/7d`)            
        })
    })
});

export const {
    useGetNftsQuery,
} = nftApi;