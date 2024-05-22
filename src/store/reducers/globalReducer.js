
export const GlobalActions = {
    setRole: "SET_ROLES",
    setCategories: "SET_CATEGORIES"
};

// Initial State
const initialState = {
    roles: [],
    categories: []
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalActions.setRole:
            return {
                ...state,
                roles: action.payload
            };
        case GlobalActions.setCategories:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};

export default globalReducer;
