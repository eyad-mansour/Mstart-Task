import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'
import dealReducer from './features/deals/dealsSlice'
import profileReducer from './features/profile/profileSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        deal: dealReducer,
        profile: profileReducer,
    },
});