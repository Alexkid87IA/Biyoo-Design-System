# Biyoo — Design System

> Biyoo est une maison de production audiovisuelle full-stack — concept, tournage, post, IA. On fait des films, des séries, du contenu social, et de la production IA.

## Sources

- **Briefing utilisateur** (FR, mai 2026)
- **Référence visuelle** : [loloagency.com](https://loloagency.com) — le brief cible une énergie "hype / culture / direct-to-consumer" plus tranchée que LOLO (qui est plus boutique / luxe). On garde leur rigueur typographique mais on pousse contraste et énergie.
- Identité de départ : **rien**. Création from scratch.
- Univers de référence supplémentaire : production houses françaises (Iconoclast, Quad), studios "creator-grade" (Dazed Studios), branding agences avec un fort vocabulaire cinéma (Order, Pentagram NY culture work).

## Brand at a glance

| | |
|---|---|
| **Nom** | Biyoo |
| **Catégorie** | Maison de production audiovisuelle |
| **Verticales** | Film · Séries · Social · IA |
| **Couverture** | Pré-prod → Production → Post-prod |
| **Audience B2B** | Marques & annonceurs · Agences pub/com · Diffuseurs/plateformes · Producteurs exécutifs/studios · Institutions/ONG · Labels & artistes |
| **Audience B2C** | Créateurs sans budget studio, qui veulent qualité production sur enveloppes réseau sociaux |
| **Spécialité IA** | Production photo & vidéo pour les budgets qui ne permettent pas le "vrai" plateau — qualité sans le coût |
| **Voix** | Hype, culture, direct, contrastée. Tu, pas vous. FR-first. |
| **Vibe visuelle** | Cinéma + agence. Encre noire, papier os, accent acid green Volt. Typo display oversize + mono pour la metadata. |
| **Tagline** | _Du brief au final cut._ |

## Content fundamentals

### Voix

- **Tutoiement systématique**. Biyoo s'adresse aux clients et au public comme à un collaborateur, pas comme à un prospect.
- **FR d'abord**, EN secondaire et seulement pour les marchés export. Pas de franglais paresseux mais on garde le vocabulaire métier en anglais (final cut, grading, rough cut, pitch, brief, deck, scope) parce que c'est la langue du métier.
- **Direct, pas commercial**. On évite les formules "solutions sur-mesure pour vos besoins". On dit ce qu'on fait.
- **Casing** : phrases en sentence-case partout. Les labels mono sont en MAJUSCULES. Les headlines display peuvent jouer avec la casse (ALL CAPS ou minuscules tendues, mais pas Title Case académique).
- **Ponctuation** : point final sur les phrases courtes même en headline, ça scande. Pas de point d'exclamation. Pas de "…" — on utilise un point ou un tiret cadratin (—).
- **Pas d'emoji** dans la voix corporate. OK pour le social tone-of-voice si pertinent, mais jamais en UI.
- **Nombres en chiffres** ("3 verticales", "200 projets") sauf début de phrase.

### Exemples

✅  
> On voit grand. Tu viens.  
> Pré-prod, prod, post — la totale.  
> Du brief au final cut, sans détour.  
> Les budgets serrés méritent aussi des belles images. C'est là qu'on entre.  
> Tournage : 4 jours. Livraison : 12 jours après. Pas de plan B, juste un plan.

❌  
> "Notre équipe de professionnels passionnés vous accompagne…" (jargon agence)  
> "On a réalisé pour vous une superbe vidéo ! 🎥✨" (emoji + ton vendeur)  
> "Découvrez nos solutions audiovisuelles" (verbe corporate)  
> "Premium content creation services" (franglais creux)

### Architecture éditoriale

- **Headlines** : 3–8 mots max. Une assertion, pas une description.
- **Sous-titres** : 1 phrase qui ancre, jamais 2.
- **Body** : courts paragraphes, 2–4 lignes. On respire.
- **Metadata** : tout ce qui est format, durée, livrables, équipe, date est en mono — c'est la voix "fiche technique" du tournage.

### Lexique Biyoo

| Préfère | Évite |
|---|---|
| brief | cahier des charges |
| tournage | shooting |
| post / post-prod | post-production (sauf doc légal) |
| livrable | rendu |
| final cut | version finale |
| boîte / maison | studio (sauf physique) |
| on (collectif) | nous (trop institutionnel) |
| crew | équipe technique |
| set | lieu de tournage |

## Visual foundations

### Palette

| Token | Hex | Rôle |
|---|---|---|
| `--ink` | `#0B0B0B` | Canvas principal. On est sur fond noir 80% du temps. |
| `--bone` | `#F2EDE2` | Papier os. Le second canvas (about, services, etc). Plus chaleureux qu'un blanc froid. |
| `--volt` | `#D8FF36` | Accent signature. Acid yellow-green. Boutons CTA, hovers, highlights, marqueurs de scène. À utiliser **avec parcimonie** — c'est la signature, pas la base. |
| `--heat` | `#FF3F1F` | Accent secondaire cinéma. Rouge-orange. Erreurs, alarmes éditoriales, "REC", drapeaux. |
| `--neutral-500` | `#6B6357` | Texte secondaire, hairlines sur bone. |
| `--cyan` | `#5BE2FF` | Réservé tags spéciaux (live, premiere). Quasi jamais. |

**Règle d'or** : 90% du temps, une page est composée de **2 couleurs neutres + 1 accent** maximum. Pas d'arc-en-ciel. Le Volt et le Heat ne cohabitent **jamais** dans la même section.

### Typographie

- **Display** — `Bricolage Grotesque`, variable, opsz/wdth/wght actifs. On va loin dans le bold (700–800). Tracking serré (-0.03 à -0.045). Les headlines sont gros, denses, posés serrés.
- **Body** — `Inter Tight`, weight 400/500. Neutre, ne se fait pas remarquer.
- **Mono** — `JetBrains Mono`, 11–13px, MAJUSCULES + tracking +0.06–0.08 pour les labels. C'est la voix "feuille de tournage" : timecode, références, durées, crédits.

> **⚠️ Substitution** : on n'a pas de webfonts custom. Bricolage Grotesque, Inter Tight et JetBrains Mono sont des choix Google Fonts qui rendent très bien le caractère voulu. Si tu veux pousser plus loin (Söhne, ABC Diatype, GT America, Druk), il faudra acheter les licences et remplacer les `@import` dans `colors_and_type.css`.

### Spacing & grille

- **Grille 8px**, demi-pas à 4px pour les micro-ajustements.
- **Layout en colonnes 12** sur le web. Gutters généreux (24–32px desktop).
- **Marges page** : `--space-7` (48px) min sur desktop, `--space-5` (24px) mobile. On n'a pas peur du vide.

### Backgrounds, surfaces & motifs

- **Surfaces** : ink (noir) et bone (os). Pas de gris en background — gris uniquement pour le texte secondaire et les hairlines.
- **Full-bleed imagery** : par défaut sur les sections projets. Les images respirent, on ne les enferme pas dans des cartes.
- **Pas de gradient** dans le système. Le gradient est interdit sauf cas exceptionnel d'overlay vidéo (protection gradient bas→noir pour la lisibilité de captions).
- **Grain léger** sur les surfaces ink (14% opacité, overlay) — donne le grain pellicule sans saturer.
- **Pas d'illustration custom**. On n'illustre pas Biyoo, on cadre et on monte. Le visuel = images de tournage, frames, BTS.
- **Motifs récurrents** :
  - **Cadres aspect-ratio** (16:9, 9:16, 2.39:1, 1:1) utilisés comme blocs de mise en page.
  - **Timecode chips** : `00:00:42:18` en mono, dans des capsules noires.
  - **Scene/take labels** : `SC.02 / TK.04` en mono.
  - **Marquee scrolls** infinis sur les bannières (verticales, clients, taglines).
  - **Numérotation** : `01 / 04`, `02 / 04` en mono, omniprésente pour rythmer.
  - **Cross-hairs / registration marks** aux coins de cadres importants — discret clin d'œil chambre noire / mire.

### Animation

- **Easing** : `cubic-bezier(.2,.9,.2,1)` par défaut — snappy, jamais "spring bouncy".
- **Durées** : 120–320ms pour UI, 600ms+ pour transitions de page.
- **Fades** : oui, courts (200ms).
- **Pas de bounce** sauf sur les chips qui apparaissent (rare).
- **Marquee** : scroll linéaire infini, 40s pour un tour complet d'une bannière de clients.
- **Hover sur images** : zoom léger 1.04, durée 600ms, ease glide.
- **Hover sur textes/links** : underline qui passe de 0 à 100% en 200ms (left-anchor), ou inversion de couleur (texte → volt).
- **Press states** : shrink 0.97, durée 80ms.
- **Page transitions** : un cover ink qui descend du haut + label "BIYOO" en mono qui fade — comme un slate de tournage.

### Hover, focus & press

- **Hover sur boutons** : fill inversion (bone → ink ou ink → volt). Pas d'élévation au hover, pas de scale.
- **Hover sur cards projet** : l'image fait un zoom léger ; le titre se souligne ; un mono "VOIR LE PROJET →" apparaît en bas-droite.
- **Focus visible** : ring volt 2px offset 3px, partout, accessible.
- **Press** : opacity 0.85 + shrink 0.97 80ms.

### Borders, shadows, transparency

- **Borders** : hairlines 1px sur `--rule`. Pas de borders épaisses sauf encadrement délibéré (frame autour d'une image, 1.5px ink).
- **Shadows** : globalement **non**. Sur bone on tolère `--shadow-1` pour les modales / dropdowns. Sur ink, jamais — on utilise des rules à la place.
- **Transparency / blur** : utilisée pour les **headers sticky** (backdrop-filter blur 24px, ink à 65%). Très utile sur des arrière-plans vidéo. Sinon on évite — la transparence "glassmorphism" généralisée n'est PAS Biyoo.

### Corner radii

- **Par défaut : 0px**. Cards, sections, boutons primaires — coins droits. La maison est carrée, comme un cadre 1.85:1.
- **Chips, tags, labels mono** : 4px, ou pill (999px) pour les pills "live"/"new".
- **Cards "premium"** sur surface bone (cartes équipe, cartes contact) : 14px, exception.
- **Pas** de 8/12px partout — c'est trop "SaaS".

### Cards anatomy

- **Card projet (ink)** : image full-bleed top, titre display 32px, mono metadata en dessous (client / format / durée), pas de border, pas de shadow.
- **Card service (bone)** : numéro display 64px à gauche (01/02/03/04), titre + body à droite, hairline 1px en haut. Pas de fond contrasté.
- **Card équipe (bone)** : photo NB 4:5, nom display 24px, rôle mono UPPERCASE 11px. Hover : la photo passe en couleur (NB → color).

### Imagery direction

- **Tonalité** : contrastée, chaude, granuleuse. Pas froide, pas désaturée façon SaaS.
- **Pas de stock**. Tout est tourné par Biyoo (réel) ou IA-curated (cohérent avec une direction photo).
- **NB autorisé** pour les portraits équipe et les BTS — switch en couleur au hover.
- **Crops cinéma** privilégiés : 2.39:1 quand on peut, 16:9 par défaut.
- **Pas de personnes en train de regarder l'objectif et de sourire** type stock corporate.

### Layout rules

- **Fixed header** sur web, hauteur 72px, transparent qui devient ink-blur sur scroll.
- **Footer** ink, dense, mono. Sitemap + crédits + adresse Paris.
- **Marquee bannière** entre header et hero ou en bas de page — tagline qui défile.
- **Pas de hero centré classique**. Le hero est aligné gauche, texte display oversize qui dépasse parfois du cadre.
- **Section transitions** : changement de surface (ink → bone) sans gradient, juste un cut net. Comme un cut au montage.

## Iconography

- **Système** : [Lucide Icons](https://lucide.dev) via CDN — stroke 1.5px, square caps, 24px par défaut.
- **Style** : line uniquement, jamais filled. On veut le trait de l'éditeur de montage, pas l'icône iOS.
- **Pas d'emoji** en UI.
- **Caractères unicode** : OK pour des arrows ASCII (→, ←, ↗, ↘, ×), pour rester cohérent avec la voix mono/typographique.
- **Logos clients** : monochrome (ink ou bone), tous à la même hauteur sur les marquees, jamais en couleur de marque.
- **Logo Biyoo** : wordmark "BIYOO" en Bricolage Grotesque 800, tracking -0.045em, les deux "O" peuvent être stylisés en lentilles / yeux. Variante monogramme : un grand "B" cadré dans un rectangle 1:1.

## Spacing & motion (résumé tokens)

Voir `colors_and_type.css` pour la liste complète. TLDR :
- Spacing : 8-grid, tokens `--space-1` (4) → `--space-11` (192).
- Radius : sharp by default ; chips 4px ; cards premium 14px.
- Motion : `--ease-snap` 200ms par défaut.

## Index — manifeste de la racine

```
.
├── README.md                       ← tu es ici
├── SKILL.md                        ← invocation Agent Skills
├── colors_and_type.css             ← tokens CSS source de vérité
├── assets/
│   ├── logo-wordmark.svg
│   ├── logo-monogram.svg
│   ├── logo-wordmark-volt.svg
│   ├── logo-stamp.svg              ← tampon noir
│   └── grain.svg                   ← overlay grain
├── preview/                        ← cartes design system (Type/Colors/Spacing/Components/Brand)
│   └── *.html
├── slides/                         ← Brand bible deck (20 slides, 16:9)
│   └── index.html
└── ui_kits/
    └── website/                    ← UI kit du site Biyoo (Home, Showreel, Case, Services, About, Contact)
        ├── README.md
        ├── index.html              ← prototype cliquable
        └── components/*.jsx
```
