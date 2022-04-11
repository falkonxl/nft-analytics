import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptonewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_BING_NEWS_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_BING_NEWS_KEY
}

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptonewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({            
            // query: ( newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            query: ( newsCategory ) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`)
            // query: ( newsCategory ) => createRequest(`/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day`)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;