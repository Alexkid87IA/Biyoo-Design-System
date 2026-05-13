---
name: biyoo-design
description: Use this skill to generate well-branded interfaces and assets for Biyoo (maison de production audiovisuelle, Paris), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Tokens** : `colors_and_type.css` — CSS variables source of truth.
- **Voix** : tutoiement, FR-first, direct, sans détour, pas d'emoji. Examples in README.
- **Palette** : `--ink #0B0B0B` + `--bone #F2EDE2` + accent `--volt #D8FF36` + `--heat #FF3F1F` (rare).
- **Type** : Display = Bricolage Grotesque (variable, 700–800, tight tracking). Body = Inter Tight. Mono = JetBrains Mono (timecode + labels).
- **Motifs** : timecode chips `00:00:42:18`, scene/take `SC.02 / TK.04`, numérotation `04 / 12`, marquees, registration crosshairs, aspect-ratio frames (2.39 / 16:9 / 1:1 / 9:16).
- **Corners** : 0 by default. 4px chips, 14px premium cards.
- **No shadows on ink** ; rules instead. Shadows only on bone for floating UI.
- **Logos** : `assets/logo-wordmark.svg`, `assets/logo-monogram.svg`, `assets/logo-stamp.svg`.
- **UI kit prototype** : `ui_kits/website/index.html` (Home, Projets, Case study, Services, About, Contact).
- **Brand bible deck** : `slides/index.html` (20 slides, 16:9).
