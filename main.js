// mobile styles
const mm = gsap.matchMedia();
mm.add("(max-width: 1200px)", () => {
  gsap.from(".hero", {
    opacity: 0,
    ease: 1,
    duration: 0.5,
    x: "70px",
  });

  gsap.from(".hero-text-container", {
    opacity: 0,
    duration: 1.5,
    x: "-70px",
  });
  gsap.from(".section-1", {
    opacity: 0,
    duration: 2,
    ease: 1,
    // x: '-100px'
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline().from(".service", {
    // delay: 0,
    // duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.5,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-2",
      start: "top 100%",
      end: "bottom 90%",
      scrub: true,
    },
  });
  gsap.timeline().from(".why-choose", {
    // delay: 0,
    // duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.5,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 100%",
      end: "bottom 90%",
      scrub: true,
    },
  });
});

// pc styles
mm.add("(min-width: 1200px)", () => {
  gsap.from(".hero-text-container", {
    opacity: 0,
    duration: 1.5,
    y: "40px",
  });

  gsap.from(".section-1", {
    opacity: 0,
    duration: 1.5,
    // x: '-70px'
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline().from(".service", {
    // delay: 0,
    // duration: 1,
    opacity: 0,
    // x: 80,
    stagger: 0.5,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-2",
      start: "top 100%",
      end: "bottom 70%",
      scrub: true,
    },
  });
  gsap.timeline().from(".why-choose", {
    // delay: 0,
    // duration: 1,
    opacity: 0,
    // x: 80,
    stagger: 0.5,
    yPercent: "BezierEasing(0.19,1,0.22,1)",
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 100%",
      end: "bottom 70%",
      scrub: true,
    },
  });
});
