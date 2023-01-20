import { createSlice } from '@reduxjs/toolkit';
import User from "../models/user";
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../constants/firebase';


const initialState = {
    users: [],
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        newUser: (state, action) => {
            const newUser = new User (
                action.payload.email,
                action.payload.password, 
            );
            state.users.push(newUser);
        },
    },  
});

export const {newUser} = authSlice.actions;


export const signUp = ({email, password}) => {
    return async (dispatch) => {

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
        // return data;
        dispatch(newUser(data));
        
    } catch (error) {
        throw error;
        }
    }
};

export const signIn = ({email, password}) => {
    return async (dispatch) => {
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
        // return data;
        dispatch(newUser(data));

    } catch (error) {
        throw error;
        }
    }
};


export default authSlice.reducer;
