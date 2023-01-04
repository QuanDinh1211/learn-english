import React from "react";

import "../content_four/contentFour.scss";
import Buttom from "../../components/layout/buttom";

const ContenFour = () => {
  return (
    <div className="content-four-container">
      <div className="content-four-wrapper">
        <div className="content-four-first">
          <img src={require("../../assets/img/phone.png")} alt="book" />
        </div>
        <div className="content-four-last">
          <div className="content-four-last-text-one">
            <span>You Already Have Content That Changes People’s Lives …</span>
          </div>
          <div className="content-four-last-text-tow">
            <span>
              But if you’re still doing everything for free, your bank account
              is empty, and you’re starting to resent the content you used to
              love to create, then you NEED to be at this training where we'll
              teach you how to finally get visible and get paid.
            </span>
          </div>
          <div className="content-four-last-btn">
            <div className="content-four-last-btn-item">
              <Buttom value="SAVE YOUR SEAT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenFour;
