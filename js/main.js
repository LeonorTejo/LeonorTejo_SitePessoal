gsap.registerPlugin(ScrollTrigger);

gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: {
    trigger: "main",
    scrub: 0.3,
  },
});

//TEXTO THIRD