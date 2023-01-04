import React from "react";

import "./contentSevent.scss";
import Buttom from "../../components/layout/buttom";

const ContentSevent = () => {
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
                  src={require("../../assets/img/feedback1.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  src={require("../../assets/img/feedback2.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  src={require("../../assets/img/feedback3.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  src={require("../../assets/img/feedback4.png")}
                  alt="img"
                />
              </div>
            </div>
            <div className="content-sevent-body-list-item">
              <div className="content-sevent-body-item">
                <img
                  src={require("../../assets/img/feedback5.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  src={require("../../assets/img/feedback6.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
                  src={require("../../assets/img/feedback7.png")}
                  alt="img"
                />
              </div>
              <div className="content-sevent-body-item">
                <img
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
