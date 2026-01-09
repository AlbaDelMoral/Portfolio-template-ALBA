/**
 * main.js
 * ------------------------------------------------------------------
 * What this file does (only the things used in my site):
 *
 * 1) PROJECT CARDS (Works section)
 *    - Reveal the project cards on scroll with a light stagger animation.
 *
 * 2) NAVIGATION (Navbar links)
 *    - Smooth scroll to each section when clicking the navbar links.
 *    - Uses GSAP ScrollToPlugin if available (for easing control).
 *    - Falls back to native smooth scrolling if GSAP plugins aren't loaded.
 *
 * 3) NAVBAR STYLE ON SCROLL
 *    - Adds/removes the "scrolled" class so CSS can change navbar styling.
 *
 * Note:
 * - I used AI help while cleaning this file because GSAP + ScrollTrigger setups
 *   can get complex quickly, and I wanted a minimal version that still works
 *   reliably with my layout.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------
  // 0) FIX: prevent refresh from jumping to a #hash section
  // --------------------------------------------------
  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
    window.scrollTo(0, 0);
  }

  // --------------------------------------------------
  // 0) ACCESSIBILITY: reduced motion preference
  // --------------------------------------------------
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Basic references
  const navbar = document.getElementById("navbar");

  // Detect GSAP + plugins (so the code doesn't break if something isn't loaded)
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";
  const hasScrollToPlugin = typeof window.ScrollToPlugin !== "undefined";

  // Register plugins only if available
  if (hasGSAP && hasScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (hasGSAP && hasScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);

  // --------------------------------------------------
  // 1) PROJECT CARDS — scroll reveal
  // --------------------------------------------------
  function initProjectCards() {
    if (prefersReducedMotion) return;
    if (!hasGSAP || !hasScrollTrigger) return;

    const cards = gsap.utils.toArray(".project-card");
    if (!cards.length) return;

    // Set an initial state so the animation is consistent
    gsap.set(cards, { y: 60, opacity: 0 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        }),
      start: "top 90%",
      once: true,
    });
  }

  // --------------------------------------------------
  // 2) NAVIGATION — smooth scroll to section ids
  // --------------------------------------------------
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const navHeight = navbar ? navbar.offsetHeight : 0;

        // GSAP scroll (best control)
        if (!prefersReducedMotion && hasGSAP && hasScrollToPlugin) {
          gsap.to(window, {
            scrollTo: { y: target, offsetY: navHeight, autoKill: false },

            duration: 0.8,
            ease: "power1.Out",
            overwrite: "auto",
          });
          return;
        }
      });
    });
  }

  // --------------------------------------------------
  // 3) NAVBAR — add "scrolled" class after a small scroll
  // --------------------------------------------------
  function initNavbarScrollState() {
    if (!navbar) return;

    function updateNavbarState() {
      if (window.scrollY > 10) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }

    window.addEventListener("scroll", updateNavbarState);
    updateNavbarState();
  }

  // --------------------------------------------------
  // INIT
  // --------------------------------------------------
  initProjectCards();
  initSmoothScroll();
  initNavbarScrollState();

  // Refresh triggers after images load (helps when images affect layout)
  window.addEventListener("load", () => {
    if (hasScrollTrigger) ScrollTrigger.refresh();
  });
});
