import React from "react";

import "./contentVideo.scss";

const ContentVideo = () => {
  return (
    <div className="content-video-container">
      <div className="content-video-wrapper">
        <div className="content-video-header">
          <h2 className="font-primary">
            Đăng ký khóa học: "Nói tiếng anh trong vòng 3 tháng cùng TELESA"
          </h2>
        </div>
        <div className="content-video-body">
          <div className="content-video-body-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/30up6PUG40s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentVideo;
