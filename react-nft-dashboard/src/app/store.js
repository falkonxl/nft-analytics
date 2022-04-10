import { configureStore  } from "@reduxjs/toolkit";

import { cryptoApi } from '../services/cryptoApi'
import { cryptoDetailsApi } from '../services/cryptoDetailsApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import { nftApi } from "../services/nftApi";
// import { nftApi } from '../services/nftApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoDetailsApi.reducerPath]: cryptoDetailsApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,   
        [nftApi.reducerPath]: nftApi.reducer
    },
});