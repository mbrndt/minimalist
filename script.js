const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%", duration: 0.5 });
    gsap.to(".line", { stroke: "white", duration: 0.5 });
  } else {
    gsap.to(".links", { x: 0, duration: 0.5 });
    gsap.to(".line", { stroke: "black", duration: 0.5 });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
  }
  burger.classList.toggle("active");
});
