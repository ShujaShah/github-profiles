import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext); //to get the alert context to be used here

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      // alert("Please enter something");
      setAlert("Please enter something", "error"); // to use the alertcontext to show the error message
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  };
  return (
    <>
      <div>
        <h1 className="text-5xl text-center pb-4">Welcome to Github Profile Finder</h1>
        <p className="text-1xl text-center pb-6">Search for any user</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 mb-8 gap-8">
        <div className="col-1"></div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="search"
                  value={text}
                  onChange={handleChange}
                ></input>
                <button type="submit" className=" absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div>
            <button onClick={() => dispatch({ type: "CLEAR_USERS" })} class="btn btn-ghost btn-large">
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UserSearch;
