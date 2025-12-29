import {configureStore} from '@reduxjs/toolkit'
import popupReducer from './features/popup/popup.slice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
    }
})