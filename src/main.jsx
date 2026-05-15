import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ScreenHome, ScreenServices, ScreenSupport,
  ScreenProfile, ScreenFlight, ScreenTrip,
} from './screens.jsx';
import { AirportTweaks, applyLogo, readLogo } from './tweaks.jsx';

// Apply persisted logo on first paint, before user opens the panel.
try {
  const saved = readLogo && readLogo();
  if (saved) requestAnimationFrame(() => applyLogo(saved));
} catch (e) {}

function useHash() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function Router() {
  const hash = useHash();
  const route = hash.replace(/^#\/?/, '');

  React.useEffect(() => {
    const el = document.getElementById('loading-overlay');
    if (!el) return;
    el.classList.add('fade-out');
    const t = setTimeout(() => { if (el) el.style.display = 'none'; }, 450);
    return () => clearTimeout(t);
  }, []);

  switch (route) {
    case 'services': return <ScreenServices/>;
    case 'support':  return <ScreenSupport/>;
    case 'profile':  return <ScreenProfile/>;
    case 'flight':   return <ScreenFlight/>;
    case 'trip':     return <ScreenTrip/>;
    default:         return <ScreenHome/>;
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(<Router/>);
ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<AirportTweaks/>);
