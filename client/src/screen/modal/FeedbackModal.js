import React, { useContext } from "react";

import "./modal.scss";

import { RootContext } from "../../store/context/rootContext";

const ModalShowFeedBack = () => {
  const { handleCloseFeedback, showFeedback } = useContext(RootContext);

  const { imgFeedback } = showFeedback;

  const handleCloseModal = () => {
    handleCloseFeedback();
  };
  return (
    <div className="modal-container" onClick={handleCloseModal}>
      <img
        className="feedback-img-modal"
        src={require(`../../assets/img/${imgFeedback}`)}
        alt="img"
      />
    </div>
  );
};

export default ModalShowFeedBack;
