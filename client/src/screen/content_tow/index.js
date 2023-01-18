import React from "react";

import "./contentTow.scss";
import Buttom from "../../components/layout/buttom";

const ContentTow = () => {
  return (
    <div className="content-tow-container">
      <div className="content-tow-wrapper">
        <div className="content-tow-container-header">
          {/* <div className="content-tow-header-title">
            <span className="title-background">
              This FREE LIVE Training Reveals My...
            </span>
          </div> */}
          <div className="content-tow-header-center">
            <span className="font-primary">Outline của khóa học ngắn</span>
          </div>
          {/* <div className="content-tow-header-des">
            <span>
              That Took Me From Minimum Wage Content Creator To Having a
              6-Figure Business in Just 12 Months!
            </span>
          </div> */}
        </div>
        <div className="content-tow-container-body">
          <div className="content-tow-body-list-item">
            <div className="content-tow-body-item">
              <div className="content-tow-body-item-stt">
                <span>1</span>
              </div>
              <div className="content-tow-body-item-text">
                <div className="content-tow-body-item-text-red">
                  <span className="font-primary">Phần 1:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    Cần làm gì để nói tiếng anh lưu loát ?
                    {/* The 4 Components to a{" "} */}
                    {/* <span className="text-blue">Home-Run Niche</span> So People
                    Will Finally{" "}
                    <span className="text-decoration">Pay Attention</span> And
                    Follow You. */}
                  </span>
                </div>
              </div>
            </div>
            <div className="content-tow-body-item">
              <div className="content-tow-body-item-stt">
                <span>2</span>
              </div>
              <div className="content-tow-body-item-text">
                <div className="content-tow-body-item-text-red">
                  <span className="font-primary">Phần 2:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    Công thức để lên kế hoạch học tập trong ngày hiệu quả mà
                    không tốn nhiều thời gian.
                    {/* The 4 Types of Content to Create To{" "}
                    <span className="text-blue">Attract Followers</span> Who
                    Will Actually <span className="text-decoration">PAY</span>{" "}
                    You in 2022. */}
                  </span>
                </div>
              </div>
            </div>
            <div className="content-tow-body-item">
              <div className="content-tow-body-item-stt">
                <span>3</span>
              </div>
              <div className="content-tow-body-item-text">
                <div className="content-tow-body-item-text-red">
                  <span className="font-primary">Phần 3:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    Những nguồn học và gợi ý mà bạn có thể sử dụng để làm tài
                    liệu học
                    {/* The 3 Key Elements That{" "}
                    <span className="text-blue">Supercharge Conversions</span>{" "}
                    And Help Creators Start{" "}
                    <span className="text-decoration">Generating Income</span>{" "}
                    Fast With Paid Clients! */}
                  </span>
                </div>
              </div>
            </div>
            <div className="content-tow-body-item">
              <div className="content-tow-body-item-stt">
                <span>4</span>
              </div>
              <div className="content-tow-body-item-text">
                <div className="content-tow-body-item-text-red">
                  <span className="font-primary">Phần 4:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    Q&A: Hỏi đáp cùng cô Telesa
                    {/* The 3 Key Elements That{" "}
                    <span className="text-blue">Supercharge Conversions</span>{" "}
                    And Help Creators Start{" "}
                    <span className="text-decoration">Generating Income</span>{" "}
                    Fast With Paid Clients! */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-tow-container-footer">
          <div className="content-tow-footer-btn">
            <Buttom value="Tham gia lớp học ngay!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTow;
