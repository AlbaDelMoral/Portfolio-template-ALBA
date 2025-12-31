# Plan 1 — Navigation Bar Layout

## Goal

Design and implement a responsive navigation bar for a portfolio website using **Bootstrap 5**.  
The navigation bar must demonstrate correct understanding of the **12-column grid system** and maintain a clean, structured layout.

---

## Navigation Requirements

The navigation bar contains the following elements:

- A brand label: **Portfolio**
- Three navigation links: **About**, **Works**, **Contact**

The layout must follow a precise column distribution within Bootstrap’s 12-column grid:

| Element   | Columns |
| --------- | ------- |
| Portfolio | 1–2     |
| (Empty)   | 3–6     |
| About     | 7–8     |
| Works     | 9–10    |
| Contact   | 11–12   |

The empty columns are intentional to create visual separation between the brand and the navigation links.

---

## Layout Strategy

- Use Bootstrap’s standard structure:
  - `.container` for page width
  - `.row` to enable the grid
  - `.col-*` classes to assign column widths
- Each navigation element occupies **exactly two columns**
- Navigation links are aligned to the right side of their respective grid cells
- No absolute positioning or manual margins are used

---

## Implementation Plan

1. Create a semantic `<nav>` element using Bootstrap’s navbar component
2. Inside the navbar, add a `.container` to control width
3. Add a `.row` with `align-items-center` to vertically align content
4. Create grid columns in this order:
   - `.col-2` for the brand
   - `.col-4` as an empty spacer
   - `.col-2` for “About”
   - `.col-2` for “Works”
   - `.col-2` for “Contact”
5. Use Bootstrap utility classes for text alignment instead of custom positioning
6. Verify that the total column count equals 12
7. Test layout consistency across screen sizes

---

## Accessibility Considerations

- Use a semantic `<nav>` element
- Use anchor tags for navigation links
- Ensure sufficient spacing between links
- Maintain keyboard navigability

---

## Expected Outcome

- A clean and structured navigation bar
- Clear demonstration of Bootstrap grid knowledge
- Layout that is easy to explain and justify during evaluation
- Code that remains readable and maintainable

---

## Use of Artificial Intelligence

Artificial intelligence was used **only during the planning phase** to:

- Clarify how Bootstrap’s 12-column grid can be applied to a navigation bar
- Validate layout logic and column distribution

All implementation decisions were reviewed, understood, and manually applied by the student.  
No AI-generated code was copied directly into the project.
