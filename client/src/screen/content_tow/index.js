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
            <span className="font-primary">OUTLINE CỦA KHÓA HỌC NGẮN</span>
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
                  <span className="font-primary">PHẦN 1:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    CẦN GÌ ĐỂ NÓI TIẾNG ANH LƯU LOÁT?
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
                  <span className="font-primary">PHẦN 2:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    CÔNG THỨC ĐỂ LÊN KẾ HOẠCH HỌC TẬP TRONG NGÀY HIỆU QUẢ MÀ
                    KHÔNG TỐN NHIỀU THỜI GIAN.
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
                  <span className="font-primary">PHẦN 3:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    NHỮNG NGUỒN HỌC VÀ GỢI Ý MÀ BẠN CÓ THỂ SỬ DỤNG LÀM TÀI LIỆU
                    HỌC
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
                  <span className="font-primary">PHẦN 4:</span>
                </div>
                <div className="content-tow-body-item-text-black">
                  <span className="font-primary">
                    Q&A: HỎI ĐÁP CÙNG CÔ TELESA
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
            <Buttom value="THAM GIA LỚP HỌC NGAY!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTow;
