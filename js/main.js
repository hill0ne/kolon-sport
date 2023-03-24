const icons = document.querySelectorAll(".header i");
const gnb = document.querySelector(".gnb");
const menu = document.querySelector(".gnb_menu");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const btn_gnb = document.querySelector(".button_gnb");
const slides = document.querySelectorAll(".swiper-slide");
const btn_info = document.querySelector(".button_info");
const btn_img = document.querySelector(".button_info img");
const info_wrap = document.querySelector(".company_info_wrap");

let status = false;

setMobileScreen();
setTabletScreen();

const swiper = new Swiper(".section_main", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
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
}

function setTabletScreen() {
  const swiper3 = new Swiper(".items", {
    slidesPerView: 4,
    spaceBetween: 10,
  });
}

// gnb 펼침
gnb.addEventListener("click", () => {
  console.log("클릭");
  menu.style.display = "flex";
  main.style.display = "none";
  footer.style.display = "none";
});

btn_gnb.addEventListener("click", () => {
  menu.style.display = "none";
  main.style.display = "block";
  footer.style.display = "block";
});

// company_info 펼침
btn_info.addEventListener("click", () => {
  if (status === false) {
    showInfo();
  } else if (status === true) {
    closeInfo();
  }
});

function showInfo() {
  btn_img.style.transform = "rotate(270deg)";
  info_wrap.style.display = "block";
  status = true;
}

function closeInfo() {
  btn_img.style.transform = "rotate(90deg)";
  info_wrap.style.display = "none";
  status = false;
}

