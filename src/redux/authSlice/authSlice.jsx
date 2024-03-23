import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    refreshToken: undefined,
    accessToken: undefined,
    isManualLogin: true,
    isGoogleLogin: false,
    isFacebookLogin: false,
    isLogged: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.refreshToken = action.payload.refreshToken;
            state.accessToken = action.payload.accessToken;
            state.isManualLogin = action.payload.isManualLogin;
            state.isGoogleLogin = action.payload.isGoogleLogin;
            state.isFacebookLogin = action.payload.isFacebookLogin;
            state.isLogged = action.payload.isLogged;
        },
        logout(state, action){
            state.isLogged = false
        }
    },
})

export const { setToken, logout } = authSlice.actions
export default authSlice.reducer