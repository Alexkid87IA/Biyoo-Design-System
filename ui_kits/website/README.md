# Biyoo — Website UI Kit

Recreation haute fidélité du site biyoo.paris. Prototype cliquable, navigation par hash.

## Pages

1. **Home** (`#/`) — vitrine, hero display oversize, grille de projets, services en aperçu
2. **Projets** (`#/projets`) — grille filtrable par verticale
3. **Case study** (`#/projets/:slug`) — page projet détaillée
4. **Services** (`#/services`) — les 4 verticales en détail
5. **À propos** (`#/a-propos`) — manifeste + équipe
6. **Contact** (`#/contact`) — brief form

## Composants

Voir `components/`. Tous les composants partagent le système de tokens de `colors_and_type.css` à la racine du projet.

- `Header.jsx` — nav sticky blurred + logo + breadcrumb
- `Footer.jsx` — footer dense, mono, sitemap
- `Marquee.jsx` — bannière défilante linéaire
- `ProjectCard.jsx` — carte projet (16:9 frame + metadata)
- `ServiceRow.jsx` — ligne service numérotée (01/02/03/04)
- `Hero.jsx` — hero aligné gauche, display oversize
- `TeamCard.jsx` — portrait équipe NB→couleur
- `Frame.jsx` — cadre aspect-ratio générique
- `pages/*.jsx` — pages complètes

## Lancer

Ouvrir `index.html`. Navigation : cliquer sur les liens du header.
