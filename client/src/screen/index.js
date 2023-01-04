import React from "react";

import "./content.scss";
import ContentOne from "./content_one";
import ContentTow from "./content_tow";
// import ContentThree from "./content_three";
// import ContenFour from "./content_four";
import ContentFive from "./content_five";
// import ContentSix from "./content_six";
import ContentSevent from "./content_sevent";
import Footer from "./footer";

const Content = () => {
  return (
    <div className="content-container">
      <ContentOne />
      <ContentTow />
      {/* <ContentThree />
      <ContenFour /> */}
      <ContentFive />
      {/* <ContentSix /> */}
      <ContentSevent />
      <Footer />
    </div>
  );
};

export default Content;
