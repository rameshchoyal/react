import { createContext } from "react";

const userContext = createContext({
  loginUser: "Default User",
});

export default userContext;
