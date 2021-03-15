const initialState = {
    data: [],
};

const weatherReducer = (state = initialState, action) => {
    if (action.type === "SET_WEATHER") {
        return {
            ...state,
            data: action.paylaod,
        };
    }
    return state;
};

export default weatherReducer;
