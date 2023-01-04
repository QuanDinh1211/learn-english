import { createContext, useState } from "react";
import axios from "axios";

import { url } from "../const";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [showModal, setshowModal] = useState(false);

  const handleSubmitFormRoot = async (formdata) => {
    const result = await axios.post(`${url}/createData`, formdata);
    return result.data;
  };

  const rootContextData = {
    showModal,
    setshowModal,
    handleSubmitFormRoot,
  };

  return (
    <RootContext.Provider value={rootContextData}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
