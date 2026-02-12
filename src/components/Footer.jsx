import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 80 80" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#00E89D" }} />
                    <stop offset="100%" style={{ stopColor: "#0099FF" }} />
                  </linearGradient>
                </defs>
                <path d="M28 8 L6 38 L28 68" fill="none" stroke="url(#footIconGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M52 8 L74 38 L52 68" fill="none" stroke="url(#footIconGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="31" y="29" width="18" height="18" rx="3" ry="3" transform="rotate(45, 40, 38)" fill="url(#footIconGrad)" opacity="0.9" />
              </svg>
              <span className="text-lg tracking-wide">
                <span className="font-light text-text">Lux</span>
                <span className="font-bold text-white">Code</span>
              </span>
            </div>
            <p className="text-sm text-text-muted max-w-xs">
              Soluzioni digitali e AI per privati e aziende.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Navigazione</span>
              <Link href="/" className="text-sm text-text-muted hover:text-primary transition-colors">Home</Link>
              <Link href="/servizi" className="text-sm text-text-muted hover:text-primary transition-colors">Servizi</Link>
              <Link href="/chi-sono" className="text-sm text-text-muted hover:text-primary transition-colors">Chi Sono</Link>
              <Link href="/contatti" className="text-sm text-text-muted hover:text-primary transition-colors">Contatti</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Contatti</span>
              <a href="mailto:max@emarluxcode.it" className="text-sm text-text-muted hover:text-primary transition-colors">max@emarluxcode.it</a>
              <a href="https://emarluxcode.it" className="text-sm text-text-muted hover:text-primary transition-colors">emarluxcode.it</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            {new Date().getFullYear()} EMAR LuxCode. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-text-muted">
            Messina, Sicilia
          </p>
        </div>
      </div>
    </footer>
  );
}