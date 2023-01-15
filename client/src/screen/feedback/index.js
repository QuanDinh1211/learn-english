import React, { useState } from "react";
import Slider from "react-slick";

import "./feedbackStyle.scss";
import FeedbackItem from "./FeedbackItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

const FeedBack = () => {
  const [dataRender, setdataRender] = useState(2);
  const dataFeedback = [
    {
      id: 1,
      img: "slide3.jpg",
      name: "Linda Nguyen",
      description: "Đang sinh sống và làm việc ở nước ngoài",
      text: "Giáo viên nhiệt tình, nhiều tâm huyết . với tôi là người mù tiếng anh và luôn xếp nhất lớp từ dưới lên bây giờ tôi có thể tự tin nói chuyện với boyfriend . cảm ơn ms rất nhiều với sự chú đáo , nhiệt tình,và kiên nhẫn dành cho tôi.thank you very much",
    },
    {
      id: 2,
      img: "slide4.jpg",
      name: "Thanh Nguyên",
      description: "Nhân viên bán hàng",
      text: "Cô giáo vui lắm lắm luôn í, rất nhiệt tình. Mình tự nhận mình là một đứa không có năng khiếu học tiếng anh ấy, học chậm, hay quên, đọc sai tè le vậy mà từ khi học cô, cô tận tình chỉ cho từng chút, cô rất kiên nhẫn với mình, hay động viên và gọi điện chỉ riêng cho mình những lỗi sai hay củng cố lại kiến thức mà trên lớp mình theo không kịp. ",
    },
    {
      id: 3,
      img: "slide5.jpg",
      name: "Quin Huynh",
      description: "Đại lý du lịch",
      text: "Telesa is my English teacher, her class always is full of energy, she usually asks us to present the topic to correct our Pronunciation, Grammar and gives us the Feedback each 10 sections.That action helps us improve our weaknesses and become more confident to speak.",
    },
    {
      id: 4,
      img: "slide1.jpg",
      name: "Nông Thị Hằng",
      description: "Giáo viên",
      text: "Nhờ có khoá học này mà tôi cải thiện đáng kể về phát âm của mình. Cô giáo rất nhiệt tình chu đáo, hướng dẫn tỉ mỉ cách phát âm. Thank you very much “Telesa English Center” ?",
    },
    {
      id: 5,
      img: "slide2.jpg",
      name: "Trần Phú",
      description: "Kinh doanh xuất nhập khẩu hàng hóa",
      text: "Lớp học cực kỳ vui nhộn và tràn đầy năng lượng. Cô hướng dẫn rất nhiệt tình chỉnh sửa từng lỗi nhỏ giúp em tiến bộ nhanh chóng. Hệ thống flash card rất hay có thể học ở bất cứ đâu giúp việc nhớ từ vựng trở nên rất dễ dàng. Các bài học được chia theo chủ để rất gần gũi với cuộc sống hàng ngày. Thanks Telesa English Center.",
    },
  ];

  const handleChangeSlide = () => {
    if (dataRender === 5) {
      setdataRender(1);
    } else {
      setdataRender(dataRender + 1);
    }
  };

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: handleChangeSlide,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsMobile = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: handleChangeSlide,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="content-feedback-container">
      <div className="content-feedback-wrapper">
        <div className="content-feedback-header">
          <h2 className="font-primary">Học viên nói gì về TELESA?</h2>
        </div>
        <div className="content-feedback-body">
          <div className="content-feedback-body-first">
            <div className="content-feedback-body-first-slide web">
              <Slider {...settings}>
                {dataFeedback.map((feedbackItem, index) => {
                  return <FeedbackItem img={feedbackItem.img} key={index} />;
                })}
              </Slider>
            </div>
            <div className="content-feedback-body-first-slide mobile">
              <Slider {...settingsMobile}>
                {dataFeedback.map((feedbackItem, index) => {
                  return <FeedbackItem img={feedbackItem.img} key={index} />;
                })}
              </Slider>
            </div>
          </div>
          <div className="content-feedback-body-last">
            <div className="content-feedback-body-last-header">
              <div className="content-feedback-body-last-header-name">
                <span className="font-primary"></span>
                {dataFeedback.map((feedback, index) => {
                  if (feedback.id === dataRender) {
                    return (
                      <span className="font-primary" key={index}>
                        {feedback.name}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="content-feedback-body-last-header-des">
                {dataFeedback.map((feedback, index) => {
                  if (feedback.id === dataRender) {
                    return (
                      <span className="font-primary" key={index}>
                        {feedback.description}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div className="content-feedback-body-last-body">
              <div className="content-feedback-body-last-body-text">
                {dataFeedback.map((feedback, index) => {
                  if (feedback.id === dataRender) {
                    return (
                      <span key={index} className="font-primary">
                        {feedback.text}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
