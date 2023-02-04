const firstSlideElement = document.querySelector(".center");

const dataFeedback = [
  {
    id: 0,
    img: "slide3.jpg",
    name: "Linda Nguyen",
    description: "Đang sinh sống và làm việc ở nước ngoài",
    text: "Giáo viên nhiệt tình, nhiều tâm huyết . với tôi là người mù tiếng anh và luôn xếp nhất lớp từ dưới lên bây giờ tôi có thể tự tin nói chuyện với boyfriend . cảm ơn ms rất nhiều với sự chú đáo , nhiệt tình,và kiên nhẫn dành cho tôi.thank you very much",
  },
  {
    id: 1,
    img: "slide4.jpg",
    name: "Thanh Nguyên",
    description: "Nhân viên bán hàng",
    text: "Cô giáo vui lắm lắm luôn í, rất nhiệt tình. Mình tự nhận mình là một đứa không có năng khiếu học tiếng anh ấy, học chậm, hay quên, đọc sai tè le vậy mà từ khi học cô, cô tận tình chỉ cho từng chút, cô rất kiên nhẫn với mình, hay động viên và gọi điện chỉ riêng cho mình những lỗi sai hay củng cố lại kiến thức mà trên lớp mình theo không kịp. ",
  },
  {
    id: 2,
    img: "slide5.jpg",
    name: "Quin Huynh",
    description: "Đại lý du lịch",
    text: "Telesa is my English teacher, her class always is full of energy, she usually asks us to present the topic to correct our Pronunciation, Grammar and gives us the Feedback each 10 sections.That action helps us improve our weaknesses and become more confident to speak.",
  },
  {
    id: 3,
    img: "slide1.jpg",
    name: "Nông Thị Hằng",
    description: "Giáo viên",
    text: "Nhờ có khoá học này mà tôi cải thiện đáng kể về phát âm của mình. Cô giáo rất nhiệt tình chu đáo, hướng dẫn tỉ mỉ cách phát âm. Thank you very much “Telesa English Center” ?",
  },
  {
    id: 4,
    img: "slide2.jpg",
    name: "Trần Phú",
    description: "Kinh doanh xuất nhập khẩu hàng hóa",
    text: "Lớp học cực kỳ vui nhộn và tràn đầy năng lượng. Cô hướng dẫn rất nhiệt tình chỉnh sửa từng lỗi nhỏ giúp em tiến bộ nhanh chóng. Hệ thống flash card rất hay có thể học ở bất cứ đâu giúp việc nhớ từ vựng trở nên rất dễ dàng. Các bài học được chia theo chủ để rất gần gũi với cuộc sống hàng ngày. Thanks Telesa English Center.",
  },
];

const listItemSlide = dataFeedback.map((item) => {
  return `<div class="content-feedback-first-slide-item">
      <div class="content-feedback--slide-item-img">
        <img src='./assets/img/${item.img}' alt="slide-img" />
      </div>
    </div>`;
});

firstSlideElement.innerHTML = listItemSlide.join("");

$(document).ready(function () {
  $(".center").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  const elementname = document.querySelector(
    ".content-feedback-body-last-header-name"
  );

  const elementdes = document.querySelector(
    ".content-feedback-body-last-header-des"
  );

  const elementText = document.querySelector(
    ".content-feedback-body-last-body-text"
  );

  const elementactive = document.getElementsByClassName(
    "content-feedback-first-slide-item slick-slide slick-current slick-active slick-center"
  );

  let dataRender = 1;

  setInterval(() => {
    dataRender = elementactive[0].getAttribute("data-slick-index");
    elementname.innerHTML = `<span class="font-primary">${dataFeedback[dataRender].name}</span>`;
    elementdes.innerHTML = `<span class="font-primary">${dataFeedback[dataRender].description}</span>`;
    elementText.innerHTML = `<span class="font-primary">${dataFeedback[dataRender].text}</span>`;
  }, 100);
});
