// shared.jsx — Header, Footer, Marquee, primitives
// All Biyoo website pages reuse these.

const { useState, useEffect } = React;

// ─────── ROUTER (hash-based, tiny) ───────
function useRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash.replace(/^#/, '') || '/';
}
function Link({ to, children, className, style, onClick }) {
  return (
    <a
      href={'#' + to}
      className={className}
      style={style}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}>
      {children}
    </a>
  );
}

// ─────── HEADER ───────
function Header() {
  const route = useRoute();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/projets', label: 'Projets' },
    { to: '/services', label: 'Services' },
    { to: '/a-propos', label: 'À propos' },
  ];

  const isActive = (to) =>
    to === '/projets' ? route.startsWith('/projets') : route === to;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(11,11,11,.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid #22221F' : '1px solid transparent',
        transition: 'background 220ms, border-color 220ms, backdrop-filter 220ms',
      }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        letterSpacing: '-0.05em',
        color: 'var(--bone)',
        textDecoration: 'none',
        lineHeight: 1,
      }}>
        BIY<span style={{ color: 'var(--volt)' }}>OO</span>
      </Link>

      <nav style={{ display: 'flex', gap: 28 }}>
        {links.map((l) => (
          <Link key={l.to} to={l.to}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isActive(l.to) ? 'var(--bone)' : '#7F7A6E',
              textDecoration: 'none',
              padding: '8px 0',
              borderBottom: isActive(l.to) ? '1.5px solid var(--volt)' : '1.5px solid transparent',
              transition: 'color 160ms, border-color 160ms',
            }}>
            {l.label}
          </Link>
        ))}
      </nav>

      <Link to="/contact" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: 'var(--volt)',
        color: 'var(--ink)',
        padding: '12px 18px',
        textDecoration: 'none',
        fontWeight: 500,
      }}>
        Brief →
      </Link>
    </header>
  );
}

// ─────── FOOTER ───────
function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)',
      color: 'var(--bone)',
      borderTop: '1px solid #22221F',
      padding: '64px 40px 32px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 48,
        paddingBottom: 64,
        borderBottom: '1px solid #22221F',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 96,
            letterSpacing: '-0.05em',
            lineHeight: 0.86,
            color: 'var(--bone)',
          }}>
            BIY<span style={{ color: 'var(--volt)' }}>OO</span>.
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            letterSpacing: '-0.02em',
            color: 'var(--bone)',
            marginTop: 24,
            maxWidth: 380,
            lineHeight: 1.3,
            fontWeight: 500,
            textTransform: 'none',
          }}>
            Du brief au final cut. On y va ?
          </div>
        </div>

        <FooterCol title="SITEMAP" links={[
          ['Projets', '/projets'],
          ['Services', '/services'],
          ['À propos', '/a-propos'],
          ['Contact', '/contact'],
        ]} />
        <FooterCol title="SERVICES" links={[
          ['Film', '/services'],
          ['Séries', '/services'],
          ['Social', '/services'],
          ['IA', '/services'],
        ]} />
        <FooterCol title="SUIVRE" links={[
          ['Instagram', '#'],
          ['Vimeo', '#'],
          ['LinkedIn', '#'],
        ]} contact={['Paris, FR', 'hello@biyoo.paris']} />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 32,
        color: '#7F7A6E',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 11,
      }}>
        <span>© BIYOO · MAISON DE PRODUCTION · PARIS · 2026</span>
        <span>00:03:12:04 / END</span>
      </div>
    </footer>
  );
}
function FooterCol({ title, links, contact }) {
  return (
    <div>
      <div style={{
        color: '#7F7A6E',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 11,
        marginBottom: 18,
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} style={{
              color: 'var(--bone)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              letterSpacing: '0.04em',
            }}>{label}</Link>
          </li>
        ))}
        {contact && contact.map((c, i) => (
          <li key={i} style={{ color: '#BDB7A8', marginTop: i === 0 ? 18 : 0, fontSize: 12 }}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

// ─────── MARQUEE ───────
function Marquee({ items, variant = 'ink', speed = 32 }) {
  const bg = variant === 'volt' ? 'var(--volt)' : 'var(--ink)';
  const fg = variant === 'volt' ? 'var(--ink)' : 'var(--bone)';
  const dot = variant === 'volt' ? 'var(--ink)' : '#7F7A6E';
  const border = variant === 'volt' ? '#B8DC1D' : '#22221F';
  return (
    <div style={{
      background: bg, color: fg,
      borderTop: `1px solid ${border}`,
      borderBottom: `1px solid ${border}`,
      padding: '20px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }}>
      <div style={{
        display: 'inline-flex',
        gap: 48,
        alignItems: 'center',
        animation: `mq-scroll ${speed}s linear infinite`,
        willChange: 'transform',
      }}>
        {[...items, ...items].map((it, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 48,
          }}>
            {it}
            <span style={{ fontSize: 14, color: dot }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────── FRAME ───────
function Frame({ ratio = '16/9', children, style, label, tc, badge, badgeColor = 'volt' }) {
  const palette = ['#1A1815', '#2F2B26', '#4D463E', '#3A3530'];
  const idx = Math.abs(((label || '').charCodeAt(0) || 0) % palette.length);
  const c1 = palette[idx];
  const c2 = palette[(idx + 2) % palette.length];

  return (
    <div style={{
      aspectRatio: ratio,
      background: `linear-gradient(135deg, ${c1} 0%, #0B0B0B 60%, ${c2} 100%)`,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {/* film grain */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: 0.14, mixBlendMode: 'overlay', pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .9 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      }} />

      {badge && (
        <span style={{
          position: 'absolute', top: 14, left: 14,
          fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
          background: badgeColor === 'heat' ? 'var(--heat)' : badgeColor === 'volt' ? 'var(--volt)' : '#22221F',
          color: badgeColor === 'heat' ? 'var(--bone)' : 'var(--ink)',
          padding: '5px 9px', fontWeight: 500,
        }}>{badge}</span>
      )}
      {tc && (
        <span style={{
          position: 'absolute', right: 14, top: 14,
          fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: '0.04em',
          background: 'rgba(0,0,0,0.6)',
          color: 'var(--bone)',
          padding: '5px 9px',
        }}>{tc}</span>
      )}

      {children}
    </div>
  );
}

// ─────── PROJECT CARD ───────
function ProjectCard({ project, size = 'md', onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <Link to={`/projets/${project.slug}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      onClick={onClick}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer' }}>
        <div style={{ overflow: 'hidden' }}>
          <Frame
            ratio={project.ratio || '16/9'}
            label={project.title}
            tc={project.duration}
            badge={project.vertical}
            badgeColor={project.vertical === 'IA' ? 'heat' : 'volt'}
            style={{ transform: hover ? 'scale(1.03)' : 'scale(1)', transition: 'transform 600ms cubic-bezier(.6,.05,.2,1)' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: size === 'lg' ? 44 : size === 'sm' ? 22 : 30,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}>{project.title}</div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#7F7A6E',
              marginTop: 10,
            }}>{project.client} · {project.year}</div>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: hover ? 'var(--volt)' : '#7F7A6E',
            transition: 'color 160ms',
          }}>
            {project.idx} / {project.total} {hover && '→'}
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─────── EXPORTS ───────
Object.assign(window, { useRoute, Link, Header, Footer, Marquee, Frame, ProjectCard });
