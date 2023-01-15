import React from "react";

import "./content.scss";
import ContentOne from "./content_one";
import ContentTow from "./content_tow";
// import ContentThree from "./content_three";
// import ContenFour from "./content_four";
import ContentFive from "./content_five";
// import ContentSix from "./content_six";
import ContentSevent from "./content_sevent";
import ContentVideo from "./content_video";
import FeedBack from "./feedback";
import Footer from "./footer";

const Content = () => {
  return (
    <div className="content-container">
      <ContentOne />
      <ContentVideo />
      <ContentTow />
      {/* <ContentThree />
      <ContenFour /> */}
      <ContentFive />
      {/* <ContentSix /> */}
      <FeedBack />
      <ContentSevent />
      <Footer />
    </div>
  );
};

export default Content;
