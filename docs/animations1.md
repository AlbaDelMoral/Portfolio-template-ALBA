# Plan 03 — Animations & Interaction

## Overview

The goal of this phase was to introduce motion into the website in a controlled and intentional way. Animations were used to improve visual hierarchy, guide navigation, and progressively reveal content, while keeping the overall experience calm and readable.

Rather than animating everything, I focused on a small number of interactions where motion adds meaning: navigation scrolling, project card reveals, and selected text reveals.

---

## Design Intent

Before implementation, I defined the following principles:

- Animations should support content, not distract from it
- Text-heavy sections should remain mostly static
- Motion should feel smooth, subtle, and predictable
- Scroll-based animations should run once and not repeat unnecessarily
- Accessibility should be respected (reduced motion)

---

## Navigation Scroll Animation

### Intention

The navigation bar links should smoothly scroll to their respective sections instead of jumping instantly. This helps the user understand the page structure and creates a more fluid experience.

### Implementation

- Navigation links use JavaScript to intercept default anchor behavior.
- Scrolling is animated using GSAP’s ScrollToPlugin to control duration and easing.
- A fixed offset is applied based on the navbar height so section titles are not hidden.
- Native smooth scrolling is used as a fallback if GSAP is unavailable or reduced motion is preferred.

### Reasoning

Native anchor jumps felt too abrupt, and CSS-only smooth scrolling does not allow control over easing. GSAP provided a simple and reliable solution for controlled scroll animation.

---

## Project Cards Reveal (Works Section)

### Intention

The projects section is visually important and benefits from a stronger entrance animation. The goal was to introduce each project card progressively as the user scrolls, creating rhythm and focus.

### Implementation

- Project cards are animated using GSAP and ScrollTrigger.
- Cards animate from below (`y` offset) with opacity transitioning from 0 to 1.
- A stagger is applied so cards appear one after another.
- The animation runs only once per card to avoid repetition when scrolling back up.

### Reasoning

This approach keeps the layout clean while adding visual emphasis to the work. Using `ScrollTrigger.batch()` improves performance and keeps the code simple.

---

## Text Reveal on Scroll (About Section Heading)

### Intention

The About section contains mostly text, so animation was kept minimal. Only the main heading (`h2`) uses a reveal animation to mark the start of the section.

### Implementation

- The heading is revealed on scroll using a vertical text reveal animation.
- GSAP animates the text from below with opacity transition.
- Overflow is hidden to keep the animation visually clean.
- The animation respects the user’s `prefers-reduced-motion` setting.

### Reasoning

Animating only the heading adds subtle emphasis without disrupting readability or causing unnecessary movement in the body text.

---

## Navbar Visual State on Scroll

### Intention

The navbar should visually respond when the user scrolls down, improving contrast and orientation.

### Implementation

- JavaScript monitors the scroll position.
- A `.scrolled` class is added or removed from the navbar.
- Visual changes (such as background color) are handled entirely in CSS.

### Reasoning

Separating behavior (JavaScript) from appearance (CSS) keeps the system flexible and easy to adjust.

---

## Accessibility Considerations

- All animations respect the `prefers-reduced-motion` media query.
- When reduced motion is enabled, animations are disabled or replaced with instant behavior.
- This ensures accessibility without requiring separate layouts.

---

## Use of AI

AI was used as a support tool during this phase due to the complexity of combining scroll behavior, animations, and layout.

Specifically, AI helped with:

- Understanding GSAP and ScrollTrigger patterns
- Debugging issues related to script order and animation conflicts
- Simplifying the original demo JavaScript into a minimal, project-specific file

All animation decisions — including where motion was used, how strong it was, and which sections remained static — were made by me through testing, iteration, and design judgment.

---

## Conclusion

The final animation system is intentionally restrained and focused:

- Navigation feels smooth and predictable
- Projects are introduced progressively and clearly
- Text animations are subtle and purposeful
- The site remains readable, accessible, and visually structured

This approach aligns with the graphic-design-driven nature of the portfolio and avoids unnecessary visual noise.
