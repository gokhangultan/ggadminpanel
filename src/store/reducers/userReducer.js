
import { ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/userAction';

const initialState = {
    user: null,
    users: [] 
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
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
            case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        default:
            return state;
    }
};

export default userReducer;
