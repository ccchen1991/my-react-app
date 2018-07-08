const initState = {
    message: 'Hi React Redux Router'
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state, 
                message: action.payload.message
            };
        default:
            return state;
    }
}