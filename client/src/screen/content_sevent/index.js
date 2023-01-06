import React, { useContext } from "react";

import "./contentSevent.scss";
import Buttom from "../../components/layout/buttom";

import { RootContext } from "../../store/context/rootContext";

const ContentSevent = () => {
  const { handleShowFeedback } = useContext(RootContext);

  const handleClickFeedback = (event) => {
    handleShowFeedback(event.target.name);
  };

  return (
    <div className="content-sevent-container">
      <div className="content-sevent-wrapper">
        <div className="content-sevent-header">
          <h2>HỌC VIÊN ĐÃ ĐẠT KẾT QUẢ NHƯ THẾ NÀO?</h2>
        </div>
        <div className="content-sevent-body">
          <div className="content-sevent-body-wrapper">
            <div className="content-sevent-body-list-item">
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback1.png"
                  src={require("../../assets/img/feedback1.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback2.png"
                  src={require("../../assets/img/feedback2.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback3.png"
                  src={require("../../assets/img/feedback3.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback4.png"
                  src={require("../../assets/img/feedback4.png")}
                  alt="img"
                />
              </div>
            </div>
            <div className="content-sevent-body-list-item">
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback5.png"
                  src={require("../../assets/img/feedback5.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback6.png"
                  src={require("../../assets/img/feedback6.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback7.png"
                  src={require("../../assets/img/feedback7.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  onClick={handleClickFeedback}
                  name="feedback8.png"
                  src={require("../../assets/img/feedback8.png")}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content-sevent-footer">
          <div className="content-sevent-footer-wrapper">
            <div className="content-sevent-footer-text">
              <span>
                GIỮ CHỖ CHO KHOÁ HỌC : “Nói Tiếng Anh trong vòng 3 tháng”
              </span>
            </div>
            <div className="contecontent-sevent-footer-btn">
              <div className="contecontent-sevent-footer-btn-item">
                <Buttom value="THAM GIA LỚP HỌC NGAY!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSevent;
