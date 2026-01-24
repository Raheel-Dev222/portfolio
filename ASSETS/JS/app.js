

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const backToTop = document.getElementById("backToTop");
const progress = document.querySelector("#backToTop .progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const progressPercent = (scrollTop / scrollHeight) * 360;

  progress.style.background = `conic-gradient(#2196f3 0deg ${progressPercent}deg, transparent ${progressPercent}deg 360deg)`;

  // Show button after scrolling 100px
  if (scrollTop > 100) {
    backToTop.style.opacity = 1;
    backToTop.style.pointerEvents = "auto";
  } else {
    backToTop.style.opacity = 0;
    backToTop.style.pointerEvents = "none";
  }
});

// Scroll to top on click
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



//*  -------- GSAP ANIMATIONS NAV AND HEROSECTION --------  *//

gsap.from(".navbar .logo", {

  x: -50,
  duration: 1.2,
  scrub: 1,
  opacity: 0


})


gsap.from(".navbar .hamburger", {

  y: -50,
  duration: 1.2,
  scrub: 1,
  opacity: 0


})

gsap.from(".navbar .nav-links li", {

  y: -50,
  duration: 1,
  scrub: 1,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2


})

gsap.from(".img-container img", {
  x: -10,
  opacity: 0,
  scale: 0.9,
  duration: 1.4,
  ease: "power3.out",
  delay: 0.3
});

gsap.from(".right-side > *", {
  x: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.25,
  ease: "power3.out"
});



//*  -------- skill section ANIMATIONS --------  *//

gsap.registerPlugin(ScrollTrigger);



gsap.from(".details > *", {
  opacity: 0,
  y: 30,
  duration: 1.3,
  ease: "power2.out",
  stagger: 0.2,      // each element appears 0.2s after the previous
  scrollTrigger: {
    trigger: ".details",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});



gsap.utils.toArray(".skill-per").forEach((bar) => {
  // Use the inline max-width as the target
  const targetWidth = bar.style.maxWidth || "100%";

  gsap.fromTo(
    bar,
    { width: 0 },       // Start from 0
    {
      width: targetWidth, // Animate to max-width
      duration: 2.5,      // Same as your original CSS
      ease: "power1.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 85%",    // when the bar enters viewport
        toggleActions: "play none none none",
        markers: false,      // set true to debug scroll trigger
        once: true           // only animate once
      }
    }
  );
});




//*  -------- ABOUT SECTION ANIMATIONS --------  *//



// Animate left section
gsap.from("#aboutsection .left > *", {
  opacity: 0,
  y: 30,
  duration: 1.4,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#aboutsection",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: false
  }
});

gsap.from("#aboutsection .right .extra", {
  delay: 0.5,
  opacity: 0,
  y: 30,
  duration: 1.4,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#aboutsection",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: false
  }
});



//*  -------- CONTACT  SECTION ANIMATIONS --------  *//

gsap.from("#contact .text > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#contact .text",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: false
  }
});

// Animate left form
gsap.from("#contact .left", {
  delay: 0.3,
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contact .left",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: false
  }
});

// Animate right section: info + availability cards
gsap.from("#contact .right > *", {
  delay: 0.6,
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,  // stagger each block (info + available)
  scrollTrigger: {
    trigger: "#contact .right",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: false
  }
});



document.addEventListener("DOMContentLoaded", () => {
  // ---------------- Theme Toggle ----------------
  (function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('lightmode');
    }
  })();

  const toggleButton = document.getElementById('theme-toggle');
  const icon = toggleButton.querySelector('i');

  toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('lightmode');
    if (document.documentElement.classList.contains('lightmode')) {
      localStorage.setItem('theme', 'light');
      icon.classList.replace('fa-sun', 'fa-moon');
    } else {
      localStorage.setItem('theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
    }
  });


  // ---------------- Typed.js ----------------
  var typed = new Typed(".auto-type", {
    strings: ["WEB DEVELOPER", "GRAPHIC DESIGNER", "VIDEO EDITOR"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // show/hide mobile links
    hamburger.classList.toggle("open");  // animate hamburger
});

// Optional: Close menu on link click
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
    });
});


});

