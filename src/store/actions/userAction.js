export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (user) => {
    return { type: UPDATE_USER, payload: user };
};

export const addUser = (user) => {
    return { type: ADD_USER, payload: user };
};

export const deleteUser = (id) => {
    return { type: DELETE_USER, payload: id };
};
