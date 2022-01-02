gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let container = document.querySelector("main");


//---------------elementos iniciais---------------
let tl1 = gsap.timeline({ delay: 0.5 });

tl1
  .from(
    ".first .div1",
    {
      y: 50,
      opacity: 0,
      ease: "power4",
      duration: 3,
    },
    0.7
  )
  .from(
    ".first .div2",
    {
      y: 50,
      opacity: 0,
      ease: "power4",
      duration: 3,
    },
    0.7
  )
  .from(
    ".first .div3",
    {
      y: 25,
      opacity: 0,
      ease: "power2",
      duration: 5,
    },
    0.7
  )
  .from(
    ".first .div4",
    {
      y: 25,
      opacity: 0,
      ease: "power2",
      duration: 5,
    },
    0.7
  );

//---------------SEGUNDO---------------
let tl2 = gsap.timeline({
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    trigger: ".second",
    start: "top bottom",
  },
});

tl2
  .from(
    ".second .div1",
    {
      y: 40,
      opacity: 0,
      ease: "power4",
      duration: 3,
    },
    0.7
  )
  .from(
    ".second .div2",
    {
      y: 40,
      opacity: 0,
      ease: "power4",
      duration: 3,
    },
    0.7
  )
  .from(
    ".second .div3",
    {
      y: 40,
      opacity: 0,
      ease: "power4",
      duration: 3,
    },
    0.7
  )
  .from(
    ".second .div5",
    {
      y: 40,
      opacity: 0,
      ease: "power4",
      duration: 3,
    },
    0.7
  );

var el = document.querySelectorAll(".el");
TweenMax.set(el, { autoAlpha: 0, right: "0%", xPercent: "-50%" });
var tl2_ = new TimelineMax({ repeat: -1 });

for (var i = 0; i < el.length; i++) {
  E = el[i];
  tl2_
    .to(E, { autoAlpha: 0, right: "5%", ease: Power1.easeIn })
    .to(E, 1, { autoAlpha: 1, right: "15%", ease: Power0.easeNone })
    .to(E, 2, { right: "30%", autoAlpha: 0, ease: Power1.easeOut });
}

//---------------TERCEIRO---------------
var texto3 = document.getElementsByClassName("textP");
for (var i = 0; i < texto3.length; i++) {
  texto3[i].style.opacity = 0;
}

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    scrub: 1,
    start: "bottom center",
  },
});

tl3.to(".third .textP", {
  y: 50,
  opacity: 1,
  ease: "power4",
  duration: 3,
});

//---------------FINAL---------------

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    start: "bottom 70%",
    scrub:1,
  },
});

tl4.from(
  ".last",
  {
    y: 40,
    opacity: 0,
    ease: "power4",
    duration: 3,
  },
  0.7
);
