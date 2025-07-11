document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video.lazy-video");

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector("source");

        if (source && source.dataset.src) {
          source.src = source.dataset.src;
          video.load(); // trigger loading
          observer.unobserve(video); // stop observing
        }
      }
    });
  });

  videos.forEach(video => {
    videoObserver.observe(video);
  });
});



  // Navbar Animation
  gsap.from(".nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3
  });

  // Hero Section Animation
  gsap.from(".hero", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });



document.addEventListener("DOMContentLoaded", () => {
  // Hero Text Glitch Animation (already via CSS, no GSAP needed)

  // Scroll-triggered section fades
  gsap.utils.toArray(".services, .projects, .lets-do-this, .contact-section, .site-footer").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // Project cards hover effect (optional enhancement)
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector("video"), { scale: 1.05, duration: 0.5, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector("video"), { scale: 1, duration: 0.5, ease: "power2.out" });
    });
  });

  // Let’s Do This glitch letters bounce in
  gsap.from(".lets span", {
    y: -50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".lets-do-this",
      start: "top 80%"
    }
  });

  // Call to action button animation
  gsap.from(".cta-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "elastic.out(1, 0.75)",
    scrollTrigger: {
      trigger: ".cta-btn",
      start: "top 85%"
    }
  });

  // Contact form fields animation
  gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%"
    }
  });

  // Footer fade in
  gsap.from(".site-footer", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top bottom"
    }
  });
});
