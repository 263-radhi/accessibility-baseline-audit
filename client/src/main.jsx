import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [status, setStatus] = React.useState('Checking API…');

  React.useEffect(() => {
    fetch('http://localhost:4000/api/health')
      .then((response) => response.json())
      .then((data) => setStatus(data.status === 'ok' ? 'API connected' : 'API response received'))
      .catch(() => setStatus('API not reachable — start the server'));
  }, []);

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header>
        <p className="eyebrow">RabTech Academy · Milestone 02</p>
        <h1>Accessibility Baseline</h1>
        <p>Accessible, maintainable full-stack project foundation.</p>
      </header>
      <section id="main-content" aria-labelledby="status-heading">
        <h2 id="status-heading">Project status</h2>
        <p role="status" aria-live="polite">{status}</p>
        <a href="https://www.pib.gov.in/" target="_blank" rel="noreferrer">
          Open the audit target: Press Information Bureau
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
