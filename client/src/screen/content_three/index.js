import React from "react";

import "./content_three.scss";

const ContentThree = () => {
  return (
    <div className="content-three-container">
      <div className="content-three-wrapper">
        <div className="content-three-first">
          <div className="content-three-first-text-one">
            <span>Plus I’ll Send You The Training Workbook for FREE!</span>
          </div>
          <div className="content-three-first-text-tow">
            <span>
              Everyone who registers also gets the downloadable PDF workbook so
              you can follow along and fill-in-the-blanks as you go!
            </span>
          </div>
        </div>
        <div className="content-three-last">
          <img src={require("../../assets/img/book.png")} alt="book" />
        </div>
      </div>
    </div>
  );
};

export default ContentThree;
