document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".js-hamburger");
  const hamburgerTarget = document.querySelector(".js-hamburger-target");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerTarget.classList.toggle("active");
  });

 const listItems = document.querySelectorAll(".js-list-item");

listItems.forEach((item) => {
  const btn = item.querySelector(".js-list-btn");
  const target = item.querySelector(".js-list-btn-target");

  if (!btn || !target) return; 

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    target.classList.toggle("active");
  });

  item.addEventListener("mouseenter", () => {
    btn.classList.add("active");
    target.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    btn.classList.remove("active");
    target.classList.remove("active");
  });
});
});
