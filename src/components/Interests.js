import React, {useContext} from "react";
import {myContext} from "./ContextProvider"

function Interests() {
  const {user, theme} = useContext(myContext)

  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {user.Interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
