import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState); // using the reducer hook

  const fetchUsers = async () => {
    const response = await fetch(
      `${GITHUB_URL}/users`
      // {
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
      // }
    );
    const data = await response.json();
    console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    // setUsers(data);
    // setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        //users,
        //loading,
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
