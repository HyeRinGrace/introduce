import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
    reducer:{
        user : userReducer, //reducer가 더 있다면 추가해주면 됨 combined과정
    }

})
