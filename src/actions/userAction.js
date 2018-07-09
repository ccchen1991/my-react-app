export const selectUser = (currentUser) => {
    return {
      type: 'SELECT_USER',
      currentUser
    }
}

export const requestUsers = () => {
    return {
        type: 'REQUEST_USERS',
        loading: true,
        error: null
    }
}

export const requestUsersSuccess = (userList) => {
    return {
      type: 'REQUEST_USERS_SUCCESS',
      userList,
      loading: false,
      error: null
    }
}

export const requestUsersError = (error) => {
    return {
      type: 'REQUEST_USERS_ERROR',
      loading: false,
      userList: [],
      error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
      dispatch(requestUsers());
  
      return fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        response => {
          if (response.ok) {
            return response.json()
          }
          throw new Error("404");
        }
      ) 
      .then(json =>
        dispatch(requestUsersSuccess(json))
      ).catch(error => {
        console.error(error);
        dispatch(requestUsersError(error))
      })
    }
  }  