import { createContext, useState } from "react";
import axios from "axios";

import { url } from "../const";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [showModal, setshowModal] = useState(false);
  const [showFeedback, setShowFeedback] = useState({
    show: false,
    imgFeedback: "",
  });

  const handleShowFeedback = (img) => {
    setShowFeedback({
      show: true,
      imgFeedback: img,
    });
  };

  const handleCloseFeedback = () => {
    setShowFeedback({
      show: false,
      imgFeedback: "",
    });
  };

  const handleSubmitFormRoot = async (formdata) => {
    const result = await axios.post(`${url}/user/app02-register`, formdata);
<<<<<<< HEAD
=======

>>>>>>> 529219018340102bf04d16e99e39f9b97840d0a7
    return result.data;
  };

  const rootContextData = {
    showModal,
    setshowModal,
    handleSubmitFormRoot,
    handleShowFeedback,
    handleCloseFeedback,
    showFeedback,
  };

  return (
    <RootContext.Provider value={rootContextData}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
