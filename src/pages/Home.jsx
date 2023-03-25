import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      {/* Here will be the search component */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
