import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../constants/firebase';

export const signUp = createAsyncThunk('auth/signUp', async (email, password) => {
    try {
        const response = await fetch(URL_AUTH_SIGN_UP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecurityToken: true
            }),
        });
        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

export const signIn = createAsyncThunk('auth/signIn', async (email, password) => {
    try {
        const response = await fetch(URL_AUTH_SIGN_IN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecurityToken: true,
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: { email: null, password: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.email = null;
                state.password = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.email = action.payload.idEmail;
                state.password = action.payload.idPassword;
            })
            .addCase(signIn.pending, (state) => {
                state.email = null;
                state.password = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.email = action.payload.idEmail;
                state.password = action.payload.idPassword;
            });
    }
});

export const { } = authSlice.actions;
export default authSlice.reducer;
