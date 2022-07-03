import { createContext, useContext, useState, useEffect } from "react";
import Router from "./router";

// Context created here
const Create = createContext();

// Context provider created here
export default function Context() {
  const [auth, setAuth] = useState(false);

  class Update {
    constructor() {
      this.updateAuth = () => setAuth(!auth);
    }
  }

  // Stops user from reloading browser
  useEffect(() => {
    window.onbeforeunload = () => {
      return "";
    };
  }, []);

  return (
    <Create.Provider value={{ auth, Update }}>
      <Router />
    </Create.Provider>
  );
}

// Custom hook to update context data
export function UpdateContext() {
  const { Update } = useContext(Create);
  const Updater = new Update();

  return Updater;
}

// Custom hook to read context data
export function ReadContext() {
  const { auth } = useContext(Create);

  const value = {
    auth,
  };

  return value;
}
