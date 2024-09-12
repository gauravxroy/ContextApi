import React, { useState } from "react";
import UserContext from "./userContext";
// eslint-disable-next-line react/prop-types
function UserContextProvider({ children }) {
  //children is generic name for props that is coming
  const [user, setUser] = useState(null);
  return (
    //wrapper (userContext.js) whith props value
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
