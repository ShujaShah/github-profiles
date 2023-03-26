import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState); // using the reducer hook


  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
