import React, { useContext } from "react";

import "./buttom.scss";
import { RootContext } from "../../../store/context/rootContext";

const Buttom = ({ value }) => {
  const { setshowModal } = useContext(RootContext);
  const handleClickBtn = () => {
    window.scrollTo(0, 0);
    setshowModal(true);
  };
  return (
    <div className="btn-container" onClick={handleClickBtn}>
      <span>{value}</span>
    </div>
  );
};

export default Buttom;
