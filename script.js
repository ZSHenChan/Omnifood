///////////////////////////////////////////////////////////

// update year automatically
const year = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// mobile navigation
const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");
navBtn.addEventListener("click", function (e) {
  e.preventDefault();
  header.classList.toggle("nav-open");
});

const globalNavLinks = document.querySelectorAll(".global-nav-link");
globalNavLinks.forEach((globalNavLink) => {
  globalNavLink.addEventListener("click", function closeNav() {
    header.classList.remove("nav-open");
  });
});

// sticky navbar after hero section
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
observer.observe(sectionHero);

// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*

*/
