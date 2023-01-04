import React, { useContext } from "react";

import "./modal.scss";
import RegisterForm from "../../components/forms/register";

import { RootContext } from "../../store/context/rootContext";

const Modal = () => {
  const { setshowModal } = useContext(RootContext);

  const handleCloseModal = () => {
    setshowModal(false);
  };
  return (
    <div className="modal-container" onClick={handleCloseModal}>
      <RegisterForm />
    </div>
  );
};

export default Modal;
