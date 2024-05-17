import { createContext, useContext as useBaseContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [vidio, setVidio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);
  const [rightbarheader, setRightbarheader] = useState(null);
  const ContextValue = { isSidebarOpen, setIsSidebarOpen, vidio, setVidio, setIsLoading, isLoading, rightbarOpen, setRightbarOpen, rightbarheader, setRightbarheader };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export const useContext = () => useBaseContext(Context);

export default ContextProvider;
