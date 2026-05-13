// data.jsx — Fake project + team data for the Biyoo prototype
const PROJECTS = [
  { slug: 'hors-saison', title: 'Hors-saison', client: 'Maison Chambord', year: 2026, vertical: 'Film', duration: '00:03:42:18', ratio: '16/9', tagline: 'Film de marque pour une maison de prêt-à-porter, tourné en Bretagne hors-saison.', team: ['Réalisation — L. Vasseur', 'Production — Biyoo', 'DOP — A. Marin', 'Montage — C. Royer'], idx: 1 },
  { slug: 'drop-03', title: 'Drop 03', client: 'Label X', year: 2025, vertical: 'Social', duration: '00:00:09:24', ratio: '9/16', tagline: 'Capsule TikTok/Reels pour le drop SS25 d\'un label streetwear.', team: ['Direction artistique — N. Karim', 'Production — Biyoo'], idx: 2 },
  { slug: 'nuit-blanche', title: 'Nuit blanche', client: 'Festival', year: 2025, vertical: 'Série', duration: '6 × 22:00', ratio: '16/9', tagline: 'Mini-série documentaire en 6 épisodes sur la scène électronique parisienne.', team: ['Réalisation — Biyoo', 'Production exécutive — France 3'], idx: 3 },
  { slug: 'sans-plateau', title: 'Sans plateau', client: 'Émergent', year: 2026, vertical: 'IA', duration: '00:01:12:00', ratio: '16/9', tagline: 'Campagne photo + vidéo IA pour une marque émergente — un budget social, un livrable plateau.', team: ['Direction artistique — Biyoo Lab', 'Production — Biyoo'], idx: 4 },
  { slug: 'avant-coureur', title: 'Avant-coureur', client: 'Hermès Sport', year: 2025, vertical: 'Film', duration: '00:01:30:00', ratio: '21/9', tagline: 'Spot lancement collection running, tourné aux Vosges au lever.', team: ['Réalisation — M. Joubert', 'Production — Biyoo'], idx: 5 },
  { slug: 'echo-park', title: 'Echo Park', client: 'Universal', year: 2024, vertical: 'Film', duration: '00:04:08:14', ratio: '16/9', tagline: 'Clip pour un artiste émergent du label Universal Music France.', team: ['Réalisation — Biyoo', 'Color — Mathilde G.'], idx: 6 },
  { slug: 'rituels', title: 'Rituels', client: 'L\'Oréal', year: 2025, vertical: 'Social', duration: '00:00:15:00', ratio: '1/1', tagline: 'Série de 12 capsules pour les réseaux sociaux du groupe L\'Oréal.', team: ['Production — Biyoo'], idx: 7 },
  { slug: 'manifeste', title: 'Manifeste', client: 'ONG Mer Vivante', year: 2024, vertical: 'Film', duration: '00:06:24:00', ratio: '2.39/1', tagline: 'Court-métrage manifeste pour une ONG océanique, projeté en festival.', team: ['Réalisation — Biyoo', 'Sound design — Studio Atlas'], idx: 8 },
  { slug: 'second-souffle', title: 'Second souffle', client: 'Arte', year: 2025, vertical: 'Série', duration: '4 × 26:00', ratio: '16/9', tagline: 'Documentaire en 4 parties pour Arte sur la reconversion post-pandémie.', team: ['Réalisation — Biyoo'], idx: 9 },
  { slug: 'low-key', title: 'Low Key', client: 'Indé', year: 2026, vertical: 'IA', duration: '00:00:24:00', ratio: '9/16', tagline: 'Mini-campagne sociale IA pour un artiste indé, livrée en 5 jours.', team: ['Direction artistique — Biyoo Lab'], idx: 10 },
  { slug: 'lever-de-rideau', title: 'Lever de rideau', client: 'Opéra de Paris', year: 2024, vertical: 'Film', duration: '00:02:48:00', ratio: '21/9', tagline: 'Film d\'ouverture de saison pour l\'Opéra de Paris.', team: ['Réalisation — Biyoo', 'Steadicam — V. Lopez'], idx: 11 },
  { slug: 'after-hours', title: 'After Hours', client: 'Boiler Room', year: 2025, vertical: 'Social', duration: '00:00:30:00', ratio: '9/16', tagline: 'Captation set Boiler Room et capsules pour réseaux sociaux.', team: ['Production — Biyoo'], idx: 12 },
];
const TEAM = [
  { name: 'Léna Vasseur', role: 'Réalisatrice · Cofondatrice' },
  { name: 'Marc Joubert', role: 'Producteur exécutif · Cofondateur' },
  { name: 'Aïcha Marin', role: 'Directrice photo' },
  { name: 'Camille Royer', role: 'Cheffe monteuse' },
  { name: 'Noah Karim', role: 'Directeur artistique social' },
  { name: 'Studio IA', role: 'Lab IA — recherche & prod' },
];
const SERVICES = [
  { n: '01', name: 'Film', tagline: 'Long, court, doc, clip.', desc: 'Du pitch à la première. Tournage 35mm / numérique / Arri. Crew français, scout international.', tags: ['DCP', 'Festival', '4K HDR'] },
  { n: '02', name: 'Séries', tagline: 'Concept, écriture, pilote, saison.', desc: 'On accompagne le développement d\'un format jusqu\'à la livraison broadcast ou streaming.', tags: ['TV', 'Streaming', 'Doc'] },
  { n: '03', name: 'Social', tagline: 'Vertical-first, livré rapide.', desc: 'Reels, TikTok, capsules. Tournage 1 journée, livraison en 5 jours. Décliné en formats multiples.', tags: ['9:16', '1:1', '16:9'] },
  { n: '04', name: 'IA', tagline: 'Qualité plateau, sans le plateau.', desc: 'Photo et vidéo génératives avec direction artistique humaine. Pour les budgets social, des images de campagne.', tags: ['Gen-AI', 'Photo', 'Vidéo'] },
];
Object.assign(window, { PROJECTS, TEAM, SERVICES });
