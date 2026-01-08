# Hero Section – Image Carousel Planning

## 1. Initial Intention

For the hero section, I wanted to keep the layout structure I had already designed, where a single image is centered within the grid instead of spanning the full width of the screen. The objective was to introduce movement to this image without changing its position, proportions, or visual hierarchy.

---

## 2. Research and Reference

To implement image rotation, I explored solutions compatible with the technologies already used in the project. I chose to work with the **Bootstrap Carousel component**, referencing the official Bootstrap documentation to understand its default structure and behavior.

At this stage, I also used **AI as a support tool** to ask specific technical questions about how the carousel works and how it could be integrated into an existing layout. This helped clarify available options, but the overall direction and decisions were guided by my own design goals.

---

## 3. Adapting the Existing Hero Layout

Instead of redesigning the hero section to fit the carousel, I integrated the carousel into my existing structure. I preserved the grid-based layout by keeping the image positioned from column 3 to column 10 using Bootstrap’s 12-column system (`col-8 offset-2`). This ensured visual consistency with the rest of the site while adding dynamic behavior.

---

## 4. Carousel Behavior Decisions

The default behavior of the Bootstrap carousel uses a sliding transition. After testing this interaction, I found that the sliding motion felt too strong and distracting for the hero section.

Through further exploration and AI-assisted clarification, I learned about the `carousel-fade` class provided by Bootstrap. I applied this class to replace the sliding transition with a fade transition, resulting in a more subtle and visually appropriate image change.

---

## 5. Image Handling and Constraints

To maintain consistency across screen sizes, I reused my existing hero image styles. I defined a fixed vertical size for the image area and applied `object-fit: cover` to ensure the images fill the space without distortion. This allowed the images to adapt responsively while preserving their proportions.

---

## 6. Testing and Refinement

All changes were tested directly in the browser using developer tools. I adjusted timing, layout, and image behavior through iterative testing. AI suggestions were used as guidance, but the final implementation was achieved through hands-on experimentation and refinement.

---

## 7. Final Outcome

This process allowed me to combine independent exploration with AI-assisted learning. AI was used as a support resource to understand technical possibilities, while the final layout, behavior, and visual decisions were made through my own reasoning and testing. The resulting hero section is dynamic, structured, and aligned with the overall design language of the portfolio.
