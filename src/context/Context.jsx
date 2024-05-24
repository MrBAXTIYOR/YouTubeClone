import { createContext, useContext as useBaseContext, useState } from "react";
import customAxios from "../service/axios.js"; 
const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [vidio, setVidio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);
  const [rightbarheader, setRightbarheader] = useState(null);

  const getSearch = async (query) => {
    const { data } = await customAxios.get("/search/", {
      params: {
        query: query || rightbarheader,
        lang: "en",
        order_by: "this_month",
        country: "us",
      },
    });
    setVidio(data.videos);
  };

  const ContextValue = {
    isSidebarOpen,
    setIsSidebarOpen,
    vidio,
    setVidio,
    setIsLoading,
    isLoading,
    rightbarOpen,
    setRightbarOpen,
    rightbarheader,
    setRightbarheader,
    getSearch,
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export const useContext = () => useBaseContext(Context);

export default ContextProvider;
