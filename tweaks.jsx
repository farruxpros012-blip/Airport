// Tweaks for Airport App — logo upload for the HY-1587 capsule.
// Logo is stored in localStorage AND ALSO encoded into the URL hash so the
// link can be shared and the logo will appear for anyone opening it.

const LOGO_KEY = 'airport.logoDataUrl';
const HASH_PARAM = 'logo';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoEnabled": true
}/*EDITMODE-END*/;

function readHashLogo() {
  try {
    const h = window.location.hash || '';
    const q = h.indexOf('?');
    if (q < 0) return '';
    const params = new URLSearchParams(h.slice(q + 1));
    const v = params.get(HASH_PARAM);
    return v ? decodeURIComponent(v) : '';
  } catch (e) { return ''; }
}
function writeHashLogo(v) {
  try {
    const h = window.location.hash || '#/';
    const q = h.indexOf('?');
    const path = q < 0 ? h : h.slice(0, q);
    const params = new URLSearchParams(q < 0 ? '' : h.slice(q + 1));
    if (v) params.set(HASH_PARAM, encodeURIComponent(v));
    else params.delete(HASH_PARAM);
    const qs = params.toString();
    // Use replaceState so we don't push history entries on every change.
    const newHash = qs ? `${path}?${qs}` : path;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', window.location.pathname + window.location.search + newHash);
    }
  } catch (e) {}
}
function readLogo() {
  // Hash takes precedence so a shared link "wins" over the local cache.
  const fromHash = readHashLogo();
  if (fromHash) return fromHash;
  try { return localStorage.getItem(LOGO_KEY) || ''; } catch (e) { return ''; }
}
function writeLogo(v) {
  try {
    if (v) localStorage.setItem(LOGO_KEY, v);
    else localStorage.removeItem(LOGO_KEY);
  } catch (e) {}
  writeHashLogo(v);
}

function applyLogo(dataUrl) {
  const root = document.getElementById('app');
  if (!root) return;
  if (dataUrl) {
    root.style.setProperty('--logo-image', `url("${dataUrl}")`);
    root.style.setProperty('--logo-show', '1');
    root.style.setProperty('--logo-fallback-show', '0');
  } else {
    root.style.setProperty('--logo-image', 'none');
    root.style.setProperty('--logo-show', '0');
    root.style.setProperty('--logo-fallback-show', '1');
  }
}

function AirportTweaks() {
  useTweaks(TWEAK_DEFAULTS); // keeps the panel/host wiring happy
  const [logoUrl, setLogoUrl] = React.useState(() => readLogo());
  const fileRef = React.useRef(null);

  React.useEffect(() => {
    applyLogo(logoUrl);
    writeLogo(logoUrl);
  }, [logoUrl]);

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setLogoUrl(reader.result);
    reader.readAsDataURL(f);
    // allow re-selecting the same file later
    e.target.value = '';
  };

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Logo" subtitle="HY-1587 capsule oldidagi belgi">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: 10, borderRadius: 10, background: '#F4F5FA',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999,
              background: logoUrl
                ? `center/cover no-repeat url("${logoUrl}")`
                : 'radial-gradient(circle at 35% 35%, #FFD66B 0%, #F2A93B 60%, #B66B14 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2A2F7A', fontSize: 16, fontWeight: 900, fontStyle: 'italic',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
            }}>{logoUrl ? '' : 'e'}</div>
            <div style={{ flex: 1, fontSize: 12, color: '#5B6588' }}>
              {logoUrl ? 'Joriy logo' : 'Standart belgi'}
            </div>
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml,image/webp"
            style={{ display: 'none' }}
            onChange={handleFile}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => fileRef.current && fileRef.current.click()}
              style={{
                flex: 1, padding: '9px 12px', borderRadius: 8,
                border: 'none', background: '#3B47C8', color: '#fff',
                fontWeight: 600, fontSize: 13, cursor: 'pointer',
              }}
            >Logo yuklash</button>
            {logoUrl && (
              <button
                onClick={() => setLogoUrl('')}
                style={{
                  padding: '9px 12px', borderRadius: 8,
                  border: '1px solid #E0E3EE', background: '#fff', color: '#5B6588',
                  fontWeight: 600, fontSize: 13, cursor: 'pointer',
                }}
              >O'chirish</button>
            )}
          </div>
          <div style={{ fontSize: 11, color: '#9AA1B8', lineHeight: 1.4 }}>
            PNG, SVG, JPG, WebP — kvadrat shaklda yuklang. Saqlanadi va sahifa qayta ochilganda ham qoladi.
          </div>
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

window.AirportTweaks = AirportTweaks;
window.applyLogo = applyLogo;
window.readLogo = readLogo;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
