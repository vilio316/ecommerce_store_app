import { configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice.js'
import numberReducer from '../features/cart/cartContentSlice.js'
import uuidReducer from "../features/cart/idSlice.js"
import { persistStore, persistReducer,   FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    storage,
}

const persRed = persistReducer(persistConfig, uuidReducer)
export const cartStore = configureStore({
    reducer:{
        cart: cartReducer,
        number: numberReducer,
        uuid: persRed,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persisted = persistStore(cartStore)