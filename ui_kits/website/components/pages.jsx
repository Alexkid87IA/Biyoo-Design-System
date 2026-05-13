// pages.jsx — All page renderings for Biyoo prototype.

const { useEffect: pUseEffect, useState: pUseState } = React;

// ─────── HOME ───────
function HomePage() {
  const featured = window.PROJECTS.slice(0, 4).map((p, i) => ({ ...p, idx: i + 1, total: 4 }));
  return (
    <main>
      {/* HERO */}
      <section style={{
        position: 'relative',
        padding: '180px 40px 80px',
        background: 'var(--ink)',
        color: 'var(--bone)',
        minHeight: 'calc(100vh - 0px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="t-meta" style={{ color: '#7F7A6E' }}>— MAISON DE PRODUCTION · PARIS · 2026</div>
          <div className="t-meta" style={{ color: '#7F7A6E' }}>SCROLL ↓</div>
        </div>
        <div>
          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(120px, 16vw, 280px)',
            lineHeight: 0.84,
            letterSpacing: '-0.05em',
            fontVariationSettings: '"wdth" 92, "opsz" 96',
          }}>
            On voit<br />
            <span style={{ color: 'var(--volt)' }}>grand.</span>
          </h1>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginTop: 40, gap: 48,
          }}>
            <p style={{
              margin: 0, maxWidth: 540,
              fontFamily: 'var(--font-body)',
              fontSize: 22, lineHeight: 1.35, color: '#BDB7A8',
            }}>
              Film, série, social, IA. Une maison qui couvre tout le pipeline — pré-prod, production, post — sous un seul toit.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/projets" style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
                textTransform: 'uppercase', padding: '14px 22px',
                background: 'var(--volt)', color: 'var(--ink)',
                textDecoration: 'none', fontWeight: 500,
              }}>Voir le reel →</Link>
              <Link to="/contact" style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
                textTransform: 'uppercase', padding: '14px 22px',
                background: 'transparent', color: 'var(--bone)', border: '1.5px solid var(--bone)',
                textDecoration: 'none', fontWeight: 500,
              }}>Démarrer un brief</Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={['FILM', 'SÉRIES', 'SOCIAL', 'IA', 'PRÉ-PROD', 'PRODUCTION', 'POST']} variant="ink" />

      {/* FEATURED PROJECTS */}
      <section style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '120px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div className="t-meta" style={{ color: '#7F7A6E' }}>— SÉLECTION 2026</div>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 96,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
            }}>Derniers projets.</h2>
          </div>
          <Link to="/projets" style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--bone)', textDecoration: 'none',
            borderBottom: '1.5px solid var(--volt)', paddingBottom: 6,
          }}>Tous les projets →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, marginBottom: 32 }}>
          <ProjectCard project={featured[0]} size="lg" />
          <ProjectCard project={featured[1]} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32 }}>
          <ProjectCard project={featured[2]} />
          <ProjectCard project={featured[3]} size="lg" />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ background: 'var(--bone)', color: 'var(--ink)', padding: '120px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div className="t-meta" style={{ color: '#6B6357' }}>— LA TOTALE</div>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 96,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
            }}>Ce qu'on fait.</h2>
          </div>
          <Link to="/services" style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none',
            borderBottom: '1.5px solid var(--ink)', paddingBottom: 6,
          }}>Services en détail →</Link>
        </div>
        <div style={{ borderTop: '2px solid var(--ink)' }}>
          {window.SERVICES.map((s) => (
            <div key={s.n} style={{
              borderBottom: '1px solid #D9D1BC',
              padding: '36px 0',
              display: 'grid',
              gridTemplateColumns: '100px 1fr 2fr 200px',
              gap: 32,
              alignItems: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 72, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--ink)',
              }}>{s.n}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 38, letterSpacing: '-0.025em', lineHeight: 1,
              }}>{s.name}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 17, color: '#3A3530', lineHeight: 1.45,
              }}>{s.desc}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: '#6B6357',
                    border: '1px solid #B5AC97', padding: '5px 9px',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={['DU BRIEF AU FINAL CUT', 'ON VOIT GRAND', 'PARIS · 2026']} variant="volt" />
    </main>
  );
}

// ─────── PROJETS GRID ───────
function ProjectsPage() {
  const [filter, setFilter] = pUseState('Tous');
  const filters = ['Tous', 'Film', 'Série', 'Social', 'IA'];
  const items = window.PROJECTS
    .filter(p => filter === 'Tous' || p.vertical === filter)
    .map((p, i, arr) => ({ ...p, idx: i + 1, total: arr.length }));

  return (
    <main style={{ background: 'var(--ink)', color: 'var(--bone)', minHeight: '100vh', paddingTop: 100 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="t-meta" style={{ color: '#7F7A6E' }}>— LE SHOWREEL · {items.length} PROJETS</div>
        <h1 style={{
          margin: '14px 0 0',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(96px, 12vw, 200px)',
          letterSpacing: '-0.045em',
          lineHeight: 0.88,
        }}>Projets.</h1>

        <div style={{ display: 'flex', gap: 8, marginTop: 64, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
              textTransform: 'uppercase', padding: '12px 18px',
              background: filter === f ? 'var(--volt)' : 'transparent',
              color: filter === f ? 'var(--ink)' : 'var(--bone)',
              border: filter === f ? '1.5px solid var(--volt)' : '1.5px solid #3A3530',
              cursor: 'pointer',
              fontWeight: 500,
            }}>{f}</button>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px 40px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, rowGap: 80 }}>
          {items.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </main>
  );
}

// ─────── PROJECT DETAIL ───────
function ProjectPage({ slug }) {
  const p = window.PROJECTS.find(x => x.slug === slug);
  if (!p) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--ink)', color: 'var(--bone)', padding: '160px 40px', textAlign: 'center' }}>
        <div className="t-meta">— 404</div>
        <h1 className="t-mega" style={{ marginTop: 24 }}>Pas trouvé.</h1>
        <Link to="/projets" style={{ color: 'var(--volt)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: 14, letterSpacing: '0.06em' }}>← retour aux projets</Link>
      </main>
    );
  }
  const others = window.PROJECTS.filter(x => x.slug !== p.slug).slice(0, 3).map((x, i) => ({ ...x, idx: i + 1, total: 3 }));

  return (
    <main style={{ background: 'var(--ink)', color: 'var(--bone)', minHeight: '100vh', paddingTop: 100 }}>
      {/* HERO */}
      <section style={{ padding: '60px 40px 40px' }}>
        <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 14 }}>
          <Link to="/projets" style={{ color: '#7F7A6E', textDecoration: 'none' }}>PROJETS</Link> / <span style={{ color: 'var(--bone)' }}>{p.title.toUpperCase()}</span> / {p.idx.toString().padStart(2, '0')} / 12
        </div>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(96px, 12vw, 200px)',
          letterSpacing: '-0.045em',
          lineHeight: 0.88,
        }}>{p.title}.</h1>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 280px', gap: 48, alignItems: 'flex-end' }}>
          <p style={{
            margin: 0, maxWidth: 680,
            fontFamily: 'var(--font-body)', fontSize: 22, lineHeight: 1.35, color: '#BDB7A8',
          }}>{p.tagline}</p>
          <div className="t-meta" style={{ color: '#7F7A6E', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div><span style={{ color: 'var(--bone)' }}>{p.client}</span> · CLIENT</div>
            <div><span style={{ color: 'var(--bone)' }}>{p.year}</span> · ANNÉE</div>
            <div><span style={{ color: 'var(--bone)' }}>{p.vertical}</span> · VERTICAL</div>
            <div><span style={{ color: 'var(--bone)' }}>{p.duration}</span> · DURÉE</div>
          </div>
        </div>
      </section>

      {/* HERO FRAME */}
      <section style={{ padding: '40px 40px 80px' }}>
        <Frame ratio={p.ratio} label={p.title} tc={p.duration} badge={p.vertical} badgeColor={p.vertical === 'IA' ? 'heat' : 'volt'} />
      </section>

      {/* META + CREDITS */}
      <section style={{ background: 'var(--bone)', color: 'var(--ink)', padding: '120px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div className="t-meta" style={{ color: '#6B6357', marginBottom: 24 }}>— LE PROJET</div>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 44, letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: 620,
            }}>
              {p.tagline} Tourné en {p.year}, livré en quatre semaines, projeté en festival et en interne.
            </p>
          </div>
          <div>
            <div className="t-meta" style={{ color: '#6B6357', marginBottom: 24 }}>— CRÉDITS</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {p.team.map(t => (
                <li key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.04em',
                  borderBottom: '1px solid #D9D1BC', paddingBottom: 14, color: 'var(--ink)',
                }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STILLS */}
      <section style={{ background: 'var(--ink)', padding: '100px 40px' }}>
        <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 32 }}>— STILLS · {p.idx.toString().padStart(2, '0')} SUR 04</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Frame ratio="3/2" label={p.title + 'A'} tc="01" />
          <Frame ratio="3/2" label={p.title + 'B'} tc="02" />
          <Frame ratio="3/2" label={p.title + 'C'} tc="03" />
          <Frame ratio="3/2" label={p.title + 'D'} tc="04" />
        </div>
      </section>

      {/* NEXT */}
      <section style={{ background: 'var(--ink)', padding: '60px 40px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="t-meta" style={{ color: '#7F7A6E' }}>— ENSUITE</div>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 64, letterSpacing: '-0.035em', lineHeight: 0.95,
            }}>Et aussi.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {others.map(o => <ProjectCard key={o.slug} project={o} size="sm" />)}
        </div>
      </section>
    </main>
  );
}

// ─────── SERVICES ───────
function ServicesPage() {
  return (
    <main style={{ background: 'var(--ink)', color: 'var(--bone)', minHeight: '100vh', paddingTop: 100 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="t-meta" style={{ color: '#7F7A6E' }}>— SERVICES · 04 VERTICALES</div>
        <h1 style={{
          margin: '14px 0 0',
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(96px, 12vw, 200px)', letterSpacing: '-0.045em', lineHeight: 0.88,
        }}>Du brief<br /><span style={{ color: 'var(--volt)' }}>au final cut.</span></h1>
        <p style={{
          margin: '40px 0 0', maxWidth: 720,
          fontFamily: 'var(--font-body)', fontSize: 22, lineHeight: 1.35, color: '#BDB7A8',
        }}>
          Quatre verticales, un seul toit. Pré-prod, production, post — on garde le projet sous contrôle de A à Z.
        </p>
      </section>

      <section style={{ padding: '80px 40px 120px' }}>
        {window.SERVICES.map((s, i) => (
          <div key={s.n} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr 1fr',
            gap: 48, alignItems: 'flex-start',
            borderTop: '1px solid #22221F',
            padding: '64px 0',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 128, letterSpacing: '-0.05em', lineHeight: 0.9,
              color: 'var(--volt)',
            }}>{s.n}</div>
            <div>
              <h3 style={{
                margin: 0,
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 80, letterSpacing: '-0.04em', lineHeight: 0.95,
              }}>{s.name}.</h3>
              <p style={{
                margin: '20px 0 0', maxWidth: 420,
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.25,
                color: '#BDB7A8',
              }}>{s.tagline}</p>
            </div>
            <div>
              <p style={{
                margin: 0, maxWidth: 480,
                fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.5,
                color: '#BDB7A8',
              }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--bone)',
                    border: '1px solid #3A3530', padding: '6px 10px',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <Marquee items={['DEMANDER UN DEVIS', 'BRIEF SUR HELLO@BIYOO.PARIS', 'ON VOIT GRAND']} variant="volt" />
    </main>
  );
}

// ─────── ABOUT ───────
function AboutPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* MANIFESTO */}
      <section style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '180px 40px 100px' }}>
        <div className="t-meta" style={{ color: '#7F7A6E' }}>— MANIFESTE</div>
        <h1 style={{
          margin: '14px 0 0',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(72px, 9vw, 144px)', letterSpacing: '-0.04em', lineHeight: 0.96, maxWidth: 1200,
        }}>
          On produit pour celles et ceux qui ont une vision et pas forcément le budget plateau.
        </h1>
        <p style={{
          margin: '48px 0 0', maxWidth: 720,
          fontFamily: 'var(--font-body)', fontSize: 22, lineHeight: 1.4, color: '#BDB7A8',
        }}>
          Biyoo, c'est une maison de production fondée à Paris en 2026. On couvre le pipeline complet — pré-prod, production, post — pour les marques, les agences, les diffuseurs, les institutions et les artistes. Et pour les budgets serrés, on a aussi des images.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ background: 'var(--bone)', color: 'var(--ink)', padding: '120px 40px' }}>
        <div className="t-meta" style={{ color: '#6B6357' }}>— L'ÉQUIPE · {window.TEAM.length} PERSONNES</div>
        <h2 style={{
          margin: '14px 0 64px',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 96, letterSpacing: '-0.04em', lineHeight: 0.95,
        }}>Le crew.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 64 }}>
          {window.TEAM.map((m, i) => (
            <TeamCard key={i} member={m} idx={i + 1} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '120px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, borderTop: '1px solid #22221F', paddingTop: 48 }}>
          {[
            ['120+', 'PROJETS LIVRÉS'],
            ['04', 'VERTICALES'],
            ['12 JRS', 'DÉLAI MOYEN POST'],
            ['100%', 'INTERNALISÉ'],
          ].map(([n, l]) => (
            <div key={l} style={{ borderTop: '2px solid var(--volt)', paddingTop: 24 }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 88, letterSpacing: '-0.05em', lineHeight: 0.9,
              }}>{n}</div>
              <div className="t-meta" style={{ color: '#7F7A6E', marginTop: 18 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function TeamCard({ member, idx }) {
  const [hover, setHover] = pUseState(false);
  const idxLabel = idx.toString().padStart(2, '0');
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer' }}>
      <div style={{
        aspectRatio: '4/5', borderRadius: 14, overflow: 'hidden', position: 'relative',
        background: hover ? `linear-gradient(180deg, #4D463E 0%, #1A1815 100%)` : `linear-gradient(180deg, #4D463E 0%, #1A1815 100%)`,
        filter: hover ? 'none' : 'grayscale(1)',
        transition: 'filter 400ms',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 40%, rgba(216,255,54,0.08) 0%, transparent 50%)',
        }} />
        <div style={{
          position: 'absolute', left: 14, top: 14,
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--bone)', opacity: 0.7,
        }}>CREW / {idxLabel}</div>
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 24, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--ink)',
        }}>{member.name}</div>
        <div className="t-meta" style={{ color: '#6B6357', marginTop: 8 }}>{member.role}</div>
      </div>
    </div>
  );
}

// ─────── CONTACT ───────
function ContactPage() {
  const [sent, setSent] = pUseState(false);
  const [verticals, setVerticals] = pUseState({ Film: false, Série: false, Social: false, IA: false });

  return (
    <main style={{ background: 'var(--ink)', color: 'var(--bone)', minHeight: '100vh', paddingTop: 100 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="t-meta" style={{ color: '#7F7A6E' }}>— BRIEF NOUS</div>
        <h1 style={{
          margin: '14px 0 0',
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(96px, 14vw, 240px)', letterSpacing: '-0.045em', lineHeight: 0.86,
        }}>On y va ?</h1>
      </section>

      <section style={{ padding: '40px 40px 120px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 80, alignItems: 'flex-start' }}>
        {!sent ? (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Field label="01 · NOM · PROJET" placeholder="ex. Campagne SS27" defaultValue="Campagne SS27" />
            <Field label="02 · CONTACT" placeholder="prenom@maison.com" type="email" />
            <div>
              <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 16 }}>03 · VERTICALES</div>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                {Object.keys(verticals).map(v => (
                  <label key={v} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: 'var(--bone)', cursor: 'pointer',
                  }}>
                    <span onClick={() => setVerticals({ ...verticals, [v]: !verticals[v] })} style={{
                      width: 22, height: 22, border: '1.5px solid var(--bone)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: verticals[v] ? 'var(--volt)' : 'transparent',
                    }}>{verticals[v] && <span style={{ color: 'var(--ink)', fontSize: 14 }}>✓</span>}</span>
                    {v}
                  </label>
                ))}
              </div>
            </div>
            <Field label="04 · BUDGET INDICATIF" placeholder="€ 5 000 — € 50 000" />
            <Field label="05 · LE BRIEF" textarea placeholder="Raconte. Format, deadline, audience, références." defaultValue="" />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
              <span className="t-meta" style={{ color: '#7F7A6E' }}>RÉPONSE SOUS 24H · DU LUN. AU VEN.</span>
              <button type="submit" style={{
                fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em',
                textTransform: 'uppercase', padding: '16px 28px',
                background: 'var(--volt)', color: 'var(--ink)', border: 'none',
                cursor: 'pointer', fontWeight: 500,
              }}>Envoyer le brief →</button>
            </div>
          </form>
        ) : (
          <div style={{ padding: '48px 0' }}>
            <div className="t-meta" style={{ color: 'var(--volt)' }}>● REÇU</div>
            <h2 style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 80, letterSpacing: '-0.04em', lineHeight: 0.95,
            }}>Bien reçu.<br />On revient vers toi.</h2>
            <p style={{ margin: '24px 0 0', fontFamily: 'var(--font-body)', fontSize: 18, color: '#BDB7A8', maxWidth: 480 }}>
              Tu reçois un accusé sur l'email indiqué. Un·e producteur·trice te répond sous 24h ouvrées avec premières questions ou un créneau.
            </p>
          </div>
        )}

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 28, fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em' }}>
          <div>
            <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 10 }}>EMAIL</div>
            <div>hello@biyoo.paris</div>
          </div>
          <div>
            <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 10 }}>STUDIO</div>
            <div>14 rue d'Hauteville<br />75010 Paris</div>
          </div>
          <div>
            <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 10 }}>SOCIAL</div>
            <div>@biyoo.paris<br />vimeo / biyoo</div>
          </div>
          <div style={{ borderTop: '1px solid #22221F', paddingTop: 24, color: '#7F7A6E', textTransform: 'uppercase' }}>
            00:00:00:00 — START
          </div>
        </aside>
      </section>
    </main>
  );
}

function Field({ label, placeholder, type = 'text', defaultValue = '', textarea }) {
  const props = {
    placeholder, defaultValue,
    style: {
      width: '100%', background: 'transparent',
      border: 'none', borderBottom: '1.5px solid var(--bone)',
      padding: '18px 0', outline: 'none',
      color: 'var(--bone)',
      fontFamily: 'var(--font-body)',
      fontSize: textarea ? 18 : 24, letterSpacing: '-0.01em',
      resize: 'none',
    },
  };
  return (
    <div>
      <div className="t-meta" style={{ color: '#7F7A6E', marginBottom: 8 }}>{label}</div>
      {textarea ? <textarea rows={4} {...props} /> : <input type={type} {...props} />}
    </div>
  );
}

Object.assign(window, { HomePage, ProjectsPage, ProjectPage, ServicesPage, AboutPage, ContactPage });
