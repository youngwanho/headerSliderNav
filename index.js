// 출처: youngwanho(mavin) 개인 작업물
// 업데이트: 2023.10.14
// 헤더 버튼 클릭 시 슬라이드되는 nav메뉴 구현과 햄버거 버튼 구현
var btnSubmenu = document.querySelector(".btn-submenu");

btnSubmenu.addEventListener("click", function () {
  const SubmenuShow = document.querySelector(".navbar-submenu");
  this.classList.toggle("active");
  SubmenuShow.classList.toggle("show");
});
