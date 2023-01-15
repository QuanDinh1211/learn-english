import React from "react";

import "./feedbackstyleitem.scss";

const FeedbackItem = ({ img }) => {
  return (
    <div className="content-feedback-first-slide-item">
      <div className="content-feedback--slide-item-img">
        <img src={require(`../../assets/img/${img}`)} alt="slide-img" />
      </div>
    </div>
  );
};

export default FeedbackItem;
