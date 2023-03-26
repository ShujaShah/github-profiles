const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS": // to get the users
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING": // to set the loading spinner
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS": // clear the users after getting the users
      return {
        ...state,
        users: [],
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
