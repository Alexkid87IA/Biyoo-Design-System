// app.jsx — Biyoo website prototype entrypoint
const { createRoot } = ReactDOM;

function App() {
  const route = useRoute();

  let page;
  if (route === '/' || route === '') page = <HomePage />;
  else if (route === '/projets') page = <ProjectsPage />;
  else if (route.startsWith('/projets/')) page = <ProjectPage slug={route.replace('/projets/', '')} />;
  else if (route === '/services') page = <ServicesPage />;
  else if (route === '/a-propos') page = <AboutPage />;
  else if (route === '/contact') page = <ContactPage />;
  else page = (
    <main style={{ minHeight: '100vh', background: 'var(--ink)', color: 'var(--bone)', padding: '180px 40px', textAlign: 'center' }}>
      <div className="t-meta" style={{ color: '#7F7A6E' }}>— 404</div>
      <h1 className="t-mega" style={{ margin: '20px 0' }}>Pas trouvé.</h1>
      <Link to="/" style={{ color: 'var(--volt)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: 14, letterSpacing: '0.08em' }}>← retour à l'accueil</Link>
    </main>
  );

  // scroll to top on route change
  React.useEffect(() => { window.scrollTo(0, 0); }, [route]);

  return (
    <div data-screen-label={`Site / ${route}`}>
      <Header />
      {page}
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
