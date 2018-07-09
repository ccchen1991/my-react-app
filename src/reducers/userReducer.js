const initState = {
    userList: [], 
    currentUser: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_USERS':
            return {
                ...state,
                loading: action.loading,
                userList: []
            };
        case 'REQUEST_USERS_SUCCESS':
            return {
                ...state,
                loading: action.loading,
                userList: action.userList
            };
        case 'REQUEST_USERS_ERROR':
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case 'SELECT_USER':
            return {
                ...state,
                currentUser: state.userList.find(user => user.id == action.currentUser)
            };
        default:
            return state;
    }
}