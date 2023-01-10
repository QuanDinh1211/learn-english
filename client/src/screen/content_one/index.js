import React from "react";

import "./content_one.scss";
import Buttom from "../../components/layout/buttom";

const ContentOne = () => {
  return (
    <div className="content-one-container">
      <div className="content-one-first">
        <div className="content-one-first-img">
          <img src={require("../../assets/img/4.png")} alt="contenone" />
        </div>
      </div>
      <div className="content-one-last">
        <div className="w-100 content-one-last-text-1">
          <span className="title-background font-primary">
            KHÓA HỌC NGẮN MIỄN PHÍ “ BÍ QUYẾT ĐỂ NÓI TIẾNG ANH LƯU LOÁT "
          </span>
        </div>
        <div className="w-100 content-one-last-text-2">
          <h1 className="font-primary">
            VIDEO NÀY CÓ THỂ THAY ĐỔI HOÀN TOÀN CÁCH HỌC TIẾNG ANH VÀ MINDSET
            CỦA BẠN
          </h1>
        </div>
        <div className="w-100 content-one-last-text-3">
          <span className="font-primary">
            BẠN ĐÃ SẴN SÀNG ĐỂ NÓI TIẾNG ANH LƯU LOÁT ?
          </span>
        </div>
        <div className="w-100 content-one-last-text-4">
          <span className="font-primary">
            (Kể cả khi bạn bắt đầu từ con số 0- không căn bản- không ngữ pháp-
            không có kế hoạch học tập)
          </span>
        </div>
        <div className="w-100 content-one-last-btn">
          <div className="content-one-last-btn-item">
            <Buttom value="THAM GIA LỚP HỌC NGAY!" />
          </div>
        </div>
        {/* <div className="w-100 content-one-last-fratured">
          <div className="content-one-last-fratured-text">
            <span>featured in</span>
          </div>
          <div className="content-one-last-fratured-img">
            <img
              src={require("../../assets/img/contentOneImg1.jpg")}
              alt="list-icon"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContentOne;
