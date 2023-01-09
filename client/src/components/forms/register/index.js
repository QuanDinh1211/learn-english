import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";

import "./register.scss";
import { RootContext } from "../../../store/context/rootContext";

const RegisterForm = () => {
  const { register, watch, setValue, handleSubmit } = useForm();
  const { setshowModal, handleSubmitFormRoot } = useContext(RootContext);

  const handleClickModalContainer = (event) => {
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    setshowModal(false);
  };

  const handleSubmitForm = async (data) => {
    setshowModal(false);
    const response = await handleSubmitFormRoot(data);

    if (response.success) {
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("email", "");
      setValue("phone", "");
    }
  };

  const [errorData, seterror] = useState({
    firstName: true,
    lastName: true,
    email: true,
  });

  useEffect(() => {
    if (watch("firstName").match(/^[A-Za-z]+$/i)) {
      seterror({ ...errorData, firstName: false });
    } else {
      seterror({ ...errorData, firstName: true });
    }
  }, [watch("firstName")]);

  useEffect(() => {
    if (watch("lastName").match(/^[A-Za-z]+$/i)) {
      seterror({ ...errorData, lastName: false });
    } else {
      seterror({ ...errorData, lastName: true });
    }
  }, [watch("lastName")]);

  useEffect(() => {
    if (watch("email").match(/^\S+@\S+$/i)) {
      seterror({ ...errorData, email: false });
    } else {
      seterror({ ...errorData, email: true });
    }
  }, [watch("email")]);

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
          <h2>TELESA</h2>
        </div>
      </div>
      <div className="register-form-body">
        <div className="register-form-body-wrapper">
          <div className="register-form-body-title">
            <h2>GIỮ CHỖ CHO KHOÁ HỌC : “Nói Tiếng Anh trong vòng 3 tháng”</h2>
          </div>
          <form className="register-body-form">
            <div className="register-form-control">
              <div className="register-form-input">
                <input
                  {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Enter first name..."
                />
              </div>
            </div>
            <div className="register-form-control">
              <div className="register-form-input">
                <input
                  {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Enter last name..."
                />
              </div>
            </div>
            <div className="register-form-control">
              <div className="register-form-input">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
            </div>
            <div className="register-form-control">
              <div className="register-form-input">
                <input
                  type="number"
                  {...register("phone")}
                  placeholder="Enter phone"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="register-form-footer">
        {/* not activated add class 'disabled' in 'register-form-btn' */}
        {errorData.firstName || errorData.lastName || errorData.email ? (
          <div className={"register-form-btn disabled"}>
            <span>ĐĂNG KÝ</span>
          </div>
        ) : (
          <div
            className={"register-form-btn "}
            onClick={handleSubmit(handleSubmitForm)}
          >
            <span>ĐĂNG KÝ</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
