import React from "react";

import "./content_five.scss";
import Buttom from "../../components/layout/buttom";

const ContentFive = () => {
  return (
    <div className="content-five-container">
      <div className="content-five-first">
        <div className="w-100 content-five-first-text-1">
          <span className="title-background">CÔ TELESA LÀ AI:</span>
        </div>
        <div className="w-100 content-five-first-text-2">
          <h2>TELESA</h2>
        </div>
        <div className="w-100 content-five-first-text-3">
          <span>
            VỚI 5 năm kinh nghiệm giảng dạy Tiếng Anh giao tiếp tại Việt Nam và
            Chứng chỉ TESOL được Trường ngôn ngữ ÚC cấp phép năm 2018.
          </span>
        </div>
        <div className="w-100 content-five-first-text-4">
          <span>
            Cô Telesa tự tin sẽ là người bạn đồng hành phù hợp nhất cho những
            bạn người lớn muốn học Tiếng Anh giao tiếp. Cô Telesa còn lại
            Founder của trung tâm Tiếng Anh trực tuyến Telesa English với hơn
            4000 ngàn học viên theo học và theo dõi trên kênh facebook.
          </span>
        </div>
        <div className="w-100 content-five-first-text-4">
          <span>
            Với tâm huyết và nguyện vọng là hơn 1 triệu học viên Việt Nam nói
            Tiếng Anh cô Telesa đã tạo ra kênh “ học Tiếng Anh cùng Telesa"
            tháng 11 năm 2022. Cô muốn đưa tới những bài học miễn phí mà nội
            dung hữu ích và phong phú cho các bạn học Việt Nam trong và ngoài
            nước.
          </span>
        </div>
        <div className="w-100 content-five-first-text-4 height-20">
          <span>
            Khóa học online “Nói Tiếng Anh trong vòng 3 tháng” của cô là sản
            phẩm của hơn 5 kinh nghiệm việc giảng dạy và sự chứng kiến những khó
            khăn và điều thiếu sót mà môi trường học tập Tiếng Anh chưa đưa tới
            được cho các bạn học Tiếng Anh từ đó Cô Telesa cung cấp 1 khoá học
            DUY NHẤT mà có thể đưa có bạn học TỪ ZERO ĐẾN HERO trong mục tiêu
            học tập của mình.
          </span>
        </div>
        <div className="w-100 content-five-first-btn">
          <div className="content-five-first-btn-item">
            <Buttom value="THAM GIA LỚP HỌC NGAY!" />
          </div>
        </div>
      </div>
      <div className="content-five-last">
        <div className="content-five-last-img">
          <img src={require("../../assets/img/2.png")} alt="contenone" />
        </div>
      </div>
    </div>
  );
};

export default ContentFive;
