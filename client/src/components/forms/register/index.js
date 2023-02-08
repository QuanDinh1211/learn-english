import React, { useState, useContext } from "react";
import { toast } from "react-toastify";

import "./register.scss";
import { RootContext } from "../../../store/context/rootContext";

const RegisterForm = () => {
  const { setshowModal, handleSubmitFormRoot } = useContext(RootContext);

  const handleClickModalContainer = (event) => {
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    setshowModal(false);
  };

  const [dataform, setdataform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [error, seterror] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
  });

  const handleCloseModalOnChangInput = (event) => {
    setdataform({ ...dataform, [event.target.name]: event.target.value });

    if (!event.target.value) {
      seterror({ ...error, [event.target.name]: false });
    } else {
      seterror({ ...error, [event.target.name]: true });
    }

    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (event.target.name === "email") {
      if (regex.test(event.target.value)) {
        seterror({ ...error, [event.target.name]: true });
      } else {
        seterror({ ...error, [event.target.name]: false });
      }
    }
  };

  const handleValidateForm = () => {
    const err = {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
    };

    Object.keys(dataform).forEach((data) => {
      if (!dataform.firstName) {
        err.firstName = false;
      }
      if (!dataform.lastName) {
        err.lastName = false;
      }
      if (!dataform.email) {
        err.email = false;
      }
      if (!dataform.phone) {
        err.phone = false;
      }
    });
    seterror(err);
  };

  const handleSubmitForm = async () => {
    handleValidateForm();
    let check = true;
    if (!dataform.firstName) {
      check = false;
    }
    if (!dataform.lastName) {
      check = false;
    }
    if (!dataform.email) {
      check = false;
    }
    if (!dataform.phone) {
      check = false;
    }

    if (check) {
      const { firstName, lastName, email, phone } = error;
      if (firstName && lastName && email && phone) {
        handleCloseModal();
        const result = await handleSubmitFormRoot(dataform);
        if (result.success) {
          toast.info("Thông tin khóa học đã được gửi qua Email của bạn.");
        }
      }
    }
  };
  return (
    <div
      className="register-form-container"
      onClick={handleClickModalContainer}
    >
      <div className="register-form-quit">
        <i className="fas fa-times" onClick={handleCloseModal}></i>
      </div>
      <div className="register-form-avar">
        <img src={require("../../../assets/img/formImg.png")} alt="avar" />
      </div>
      <div className="register-form-header">
        <div className="register-form-header-name">
          <h2 className="font-primary">TELESA</h2>
        </div>
      </div>
      <div className="register-form-body">
        <div className="register-form-body-wrapper">
          <div className="register-form-body-title">
            <h2 className="font-primary">
              GIỮ CHỖ CHO KHOÁ HỌC : “Nói Tiếng Anh trong vòng 3 tháng”
            </h2>
          </div>
          <form className="register-body-form">
            <div className="register-form-control">
              <div
                className={
                  error.firstName ? "form-group" : "form-group invalid"
                }
              >
                <input
                  onChange={handleCloseModalOnChangInput}
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name..."
                />
              </div>
            </div>
            <div className="register-form-control">
              <div
                className={error.lastName ? "form-group" : "form-group invalid"}
              >
                <input
                  onChange={handleCloseModalOnChangInput}
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name..."
                />
              </div>
            </div>
            <div className="register-form-control">
              <div
                className={error.email ? "form-group" : "form-group invalid"}
              >
                <input
                  onChange={handleCloseModalOnChangInput}
                  id="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </div>
            </div>
            <div className="register-form-control">
              <div
                className={error.phone ? "form-group" : "form-group invalid"}
              >
                <input
                  onChange={handleCloseModalOnChangInput}
                  type="number"
                  name="phone"
                  placeholder="Enter phone"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="register-form-footer">
        {/* not activated add class 'disabled' in 'register-form-btn' */}
        <button onClick={handleSubmitForm} className={"register-form-btn "}>
          <span className="font-primary">ĐĂNG KÝ</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
