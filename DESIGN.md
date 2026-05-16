# JG University Design System

## 1. Visual Theme & Atmosphere
**Philosophy:** Editorial Excellence & Modern Academic Trust.
The design employs a "High-Craft" aesthetic that balances traditional institutional credibility with cutting-edge digital interaction. It uses a clean, airy layout with sophisticated micro-interactions (magnetic buttons, parallax scrolling, and glassmorphism) to create a premium, immersive experience.

**Key Visual Identifiers:**
- **Grid Layout:** A subtle underlying grid pattern that evokes blueprints and structured learning.
- **Glassmorphism:** Semi-transparent "Glass" cards that provide depth and a modern "airy" feel.
- **Dynamic Mesh Gradients:** Soft, moving crimson and amber light beams in the background that add life without distraction.
- **Editorial Typography:** High-contrast headings with tight tracking for a bold, authoritative voice.

## 2. Color Palette & Roles

| Color Name | Hex Code | Functional Role |
| :--- | :--- | :--- |
| **Academic Crimson** | `#991B1B` | Primary brand color, used for key actions, accents, and institutional identity. |
| **Prestige Gold** | `#D97706` | Secondary accent color, used for "Excellence" highlights and decorative gradients. |
| **Pure Slate (Light)** | `#FFFFFF` | Primary background color for light mode, providing a clean canvas. |
| **Deep Space (Dark)** | `#020617` | Primary background color for dark mode, evoking sophistication. |
| **Glass White** | `rgba(255,255,255,0.7)` | Backdrop for interactive cards in light mode. |
| **Glass Navy** | `rgba(15,23,42,0.7)` | Backdrop for interactive cards in dark mode. |

## 3. Typography Rules
- **Display Font:** `Plus Jakarta Sans` - Used for primary headings and hero sections. Set with `font-black` and `tracking-tighter` for a high-end editorial look.
- **Body Font:** `Inter` - Used for UI elements and descriptive text. Focuses on readability and modern sans-serif aesthetics.
- **Text Gradient:** A linear gradient from **Academic Crimson** to **Prestige Gold** is used sparingly on keywords to draw attention and signify premium quality.

## 4. Component Stylings
- **Magnetic Buttons:** Pill-shaped (`rounded-full`) buttons that respond to cursor proximity with a physical "magnetic" pull effect. Often features a hover-driven "shimmer" or translation.
- **Glass Cards:** Cards with generously rounded corners (`rounded-[2.5rem]`), backdrop-blur (`blur-24px`), and subtle borders (`border-white/20`).
- **Interactive Grids:** Features like the Programs section use hover-aware radial gradients that follow the mouse, creating a "torchlight" effect on cards.
- **Parallax Imagery:** Large, high-quality Unsplash images nested in high-radius containers with scroll-driven translation (Y-axis movement).

## 5. Layout Principles
- **Generous Whitespace:** Large section padding (`py-20` to `py-32`) ensures the content breathes and feels exclusive.
- **Responsive Hierarchy:** Uses "Fluid Typography" (e.g., `text-[clamp(2.5rem,8vw,5.5rem)]`) to maintain visual impact across all device sizes.
- **Motion Orchestration:** Framer Motion is used for "fade-up" staggered entries, ensuring a smooth, sequenced reveal of information.
