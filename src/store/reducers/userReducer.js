// reducers/userReducer.js

import { SET_USER, ADD_USER, DELETE_USER } from '../actions/userAction';

const initialState = {
    user: null,
    users: [] 
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
                };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        default:
            return state;
    }
};

export default userReducer;
