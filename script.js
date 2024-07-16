window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("header");
  const sticky = header.offsetHeight;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

document.getElementById("menu-toggle").onclick = function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
};
