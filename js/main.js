let status = false;

setMobileScreen();
setTabletScreen();

// 메인 슬라이드 라이브러리
const swiper = new Swiper(".section_main", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 모바일 사이즈 일 때 슬라이드 갯수가 2개,
// 태블릿 사이즈 일 때 슬라이드 갯수가 4개로 resize 되는 함수
window.addEventListener("resize", (e) => {
  let screenWidth = e.target.innerWidth;
  if (screenWidth < 767 && status === false) {
    setMobileScreen();
  } else if (screenWidth > 768 && status === true) {
    setTabletScreen();
  }
});

function setMobileScreen() {
  const swiper2 = new Swiper(".items", {
    slidesPerView: 2.2,
    spaceBetween: 10,
  });
  status = true;
}

function setTabletScreen() {
  const swiper3 = new Swiper(".items", {
    slidesPerView: 4,
    spaceBetween: 10,
  });
  status = false;
}
