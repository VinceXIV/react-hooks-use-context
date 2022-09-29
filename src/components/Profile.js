import React, {useContext} from "react";
import Interests from "./Interests";
import {myContext} from "./ContextProvider"

function Profile() {
  const {user, theme} = useContext(myContext)

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests />
    </div>
  );
}

export default Profile;
