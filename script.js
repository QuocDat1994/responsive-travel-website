window.onload = () => {
  const nav = document.querySelector("nav .nav-items");
  const navBtn = document.querySelector(".nav-btn");
  const allSections = document.querySelectorAll("section");

  [...nav.children].forEach((item) => {
    item.addEventListener("click", () => {
      const href = item.getAttribute("data-href");
      const section = document.querySelector(`#${href}`);

      allSections.forEach((section) => {
        section.classList.remove("active");
      });
      section.classList.add("active");
    });
  });

  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");

    if ([...navBtn.classList].includes("active")) {
      nav.parentElement.classList.add("active");
    } else {
      nav.parentElement.classList.remove("active");
    }
  });
};
