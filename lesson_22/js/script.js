const icon = document.querySelector(".bottom-head__icon-menu");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});
// ---------- Accordeon( Footer) ---------
let titles = Array.from(document.querySelectorAll(".footer__title"));
for (let title of titles) {
  title.addEventListener("click", function () {
    title.nextElementSibling.classList.toggle("hidden");
  });
}
