import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

// const first = useContext(second) snippet

export const AppContext = createContext(null);

const AAuseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  )
}

export default AAuseContext