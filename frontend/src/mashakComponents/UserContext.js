import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const UserUpdateContext = createContext();

export function useUser() {
  return useContext(UserContext);
}
export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function UserProvider({children}) {
  const [loggedUser, setLoggedUser] = useState("sfdfs");

  function setUser(str1) {
    setLoggedUser(str1);
    
  }
  return (
    <UserContext.Provider value={loggedUser}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}