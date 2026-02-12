import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function IllustrationAzienda() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="grad1b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect x="60" y="80" width="280" height="160" rx="16" fill="url(#grad1b)" stroke="url(#grad1a)" strokeWidth="1.5" />
      <rect x="80" y="100" width="100" height="8" rx="4" fill="#00E89D" opacity="0.6" />
      <rect x="80" y="118" width="160" height="6" rx="3" fill="#8896AB" opacity="0.3" />
      <rect x="80" y="132" width="140" height="6" rx="3" fill="#8896AB" opacity="0.3" />
      <rect x="80" y="146" width="150" height="6" rx="3" fill="#8896AB" opacity="0.3" />
      <rect x="80" y="170" width="80" height="32" rx="8" fill="url(#grad1a)" opacity="0.9" />
      <text x="120" y="191" textAnchor="middle" fill="#080E1A" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Inizia</text>
      <circle cx="300" cy="140" r="35" fill="url(#grad1b)" stroke="url(#grad1a)" strokeWidth="1" />
      <path d="M288 140 L296 148 L312 132" fill="none" stroke="#00E89D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="90" cy="60" r="4" fill="#00E89D" opacity="0.4" />
      <circle cx="320" cy="70" r="3" fill="#0099FF" opacity="0.4" />
      <circle cx="180" cy="260" r="3" fill="#00E89D" opacity="0.3" />
      <line x1="85" y1="65" x2="85" y2="80" stroke="#00E89D" strokeWidth="1" opacity="0.2" />
      <line x1="320" y1="74" x2="320" y2="80" stroke="#0099FF" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

function IllustrationMissione() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad2a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="grad2b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="150" r="90" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
      <circle cx="200" cy="150" r="60" fill="none" stroke="url(#grad2a)" strokeWidth="0.8" strokeDasharray="4 4" />
      <circle cx="200" cy="150" r="20" fill="url(#grad2a)" opacity="0.3" />
      <circle cx="200" cy="150" r="6" fill="#00E89D" />
      <g opacity="0.7">
        <circle cx="200" cy="60" r="18" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
        <path d="M194 60 L200 54 L206 60 L200 66 Z" fill="#00E89D" opacity="0.8" />
      </g>
      <g opacity="0.7">
        <circle cx="290" cy="110" r="18" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
        <rect x="286" y="104" width="8" height="12" rx="2" fill="#0099FF" opacity="0.8" />
      </g>
      <g opacity="0.7">
        <circle cx="290" cy="195" r="18" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
        <path d="M284 195 L290 189 L296 195 L290 201 Z" fill="#00C4FF" opacity="0.8" />
      </g>
      <g opacity="0.7">
        <circle cx="200" cy="240" r="18" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
        <circle cx="200" cy="240" r="5" fill="#00E89D" opacity="0.8" />
      </g>
      <g opacity="0.7">
        <circle cx="110" cy="195" r="18" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
        <rect x="105" y="190" width="10" height="10" rx="2" fill="#0099FF" opacity="0.8" />
      </g>
      <g opacity="0.7">
        <circle cx="110" cy="110" r="18" fill="url(#grad2b)" stroke="url(#grad2a)" strokeWidth="1" />
        <path d="M104 110 L110 104 L116 110" fill="none" stroke="#00E89D" strokeWidth="2" strokeLinecap="round" />
      </g>
      <line x1="200" y1="78" x2="200" y2="90" stroke="url(#grad2a)" strokeWidth="0.8" opacity="0.5" />
      <line x1="272" y1="115" x2="260" y2="125" stroke="url(#grad2a)" strokeWidth="0.8" opacity="0.5" />
      <line x1="272" y1="190" x2="260" y2="180" stroke="url(#grad2a)" strokeWidth="0.8" opacity="0.5" />
      <line x1="200" y1="222" x2="200" y2="210" stroke="url(#grad2a)" strokeWidth="0.8" opacity="0.5" />
      <line x1="128" y1="190" x2="140" y2="180" stroke="url(#grad2a)" strokeWidth="0.8" opacity="0.5" />
      <line x1="128" y1="115" x2="140" y2="125" stroke="url(#grad2a)" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function IllustrationValori() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad3a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="grad3b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="80" height="200" rx="12" fill="url(#grad3b)" stroke="url(#grad3a)" strokeWidth="1" />
        <rect x="12" y="150" width="56" height="38" rx="6" fill="#00E89D" opacity="0.25" />
        <rect x="12" y="100" width="56" height="38" rx="6" fill="#00E89D" opacity="0.15" />
        <rect x="12" y="50" width="56" height="38" rx="6" fill="#00E89D" opacity="0.08" />
        <text x="40" y="175" textAnchor="middle" fill="#00E89D" fontSize="11" fontWeight="bold" fontFamily="sans-serif">100%</text>
        <text x="40" y="15" textAnchor="middle" fill="#8896AB" fontSize="10" fontFamily="sans-serif">Precisione</text>
      </g>
      <g transform="translate(160, 50)">
        <rect x="0" y="0" width="80" height="200" rx="12" fill="url(#grad3b)" stroke="url(#grad3a)" strokeWidth="1" />
        <rect x="12" y="150" width="56" height="38" rx="6" fill="#00C4FF" opacity="0.25" />
        <rect x="12" y="100" width="56" height="38" rx="6" fill="#00C4FF" opacity="0.15" />
        <circle cx="40" cy="70" r="14" fill="none" stroke="#00C4FF" strokeWidth="1.5" opacity="0.3" />
        <path d="M34 70 L40 64 L46 70 L40 76 Z" fill="#00C4FF" opacity="0.4" />
        <text x="40" y="175" textAnchor="middle" fill="#00C4FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Risultati</text>
        <text x="40" y="15" textAnchor="middle" fill="#8896AB" fontSize="10" fontFamily="sans-serif">Concretezza</text>
      </g>
      <g transform="translate(260, 50)">
        <rect x="0" y="0" width="80" height="200" rx="12" fill="url(#grad3b)" stroke="url(#grad3a)" strokeWidth="1" />
        <rect x="12" y="150" width="56" height="38" rx="6" fill="#0099FF" opacity="0.25" />
        <rect x="12" y="100" width="56" height="38" rx="6" fill="#0099FF" opacity="0.18" />
        <rect x="12" y="50" width="56" height="38" rx="6" fill="#0099FF" opacity="0.12" />
        <path d="M28 165 L40 155 L52 165" fill="none" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <text x="40" y="15" textAnchor="middle" fill="#8896AB" fontSize="10" fontFamily="sans-serif">Cura</text>
      </g>
    </svg>
  );
}

function IllustrationEMAR() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad4a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="grad4b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E89D" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0099FF" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="150" r="100" fill="url(#grad4b)" stroke="url(#grad4a)" strokeWidth="1" />
      <circle cx="200" cy="150" r="70" fill="none" stroke="url(#grad4a)" strokeWidth="0.5" strokeDasharray="3 3" />
      <g>
        <circle cx="200" cy="80" r="22" fill="url(#grad4b)" stroke="url(#grad4a)" strokeWidth="1.5" />
        <text x="200" y="86" textAnchor="middle" fill="#00E89D" fontSize="18" fontWeight="bold" fontFamily="sans-serif">E</text>
      </g>
      <g>
        <circle cx="270" cy="150" r="22" fill="url(#grad4b)" stroke="url(#grad4a)" strokeWidth="1.5" />
        <text x="270" y="156" textAnchor="middle" fill="#00C4FF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">M</text>
      </g>
      <g>
        <circle cx="200" cy="220" r="22" fill="url(#grad4b)" stroke="url(#grad4a)" strokeWidth="1.5" />
        <text x="200" y="226" textAnchor="middle" fill="#0099FF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">A</text>
      </g>
      <g>
        <circle cx="130" cy="150" r="22" fill="url(#grad4b)" stroke="url(#grad4a)" strokeWidth="1.5" />
        <text x="130" y="156" textAnchor="middle" fill="#00E89D" fontSize="18" fontWeight="bold" fontFamily="sans-serif">R</text>
      </g>
      <line x1="200" y1="102" x2="248" y2="138" stroke="url(#grad4a)" strokeWidth="1" opacity="0.4" />
      <line x1="248" y1="162" x2="200" y2="198" stroke="url(#grad4a)" strokeWidth="1" opacity="0.4" />
      <line x1="178" y1="198" x2="152" y2="162" stroke="url(#grad4a)" strokeWidth="1" opacity="0.4" />
      <line x1="152" y1="138" x2="178" y2="102" stroke="url(#grad4a)" strokeWidth="1" opacity="0.4" />
      <circle cx="200" cy="150" r="8" fill="url(#grad4a)" opacity="0.4" />
      <circle cx="200" cy="150" r="3" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

export default function ChiSono() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">

        {/* Header */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-text-secondary tracking-wide">La nostra storia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text">La nostra </span>
            <span className="gradient-text">visione</span>
          </h1>
        </section>

        {/* Sezione 1 - L'azienda */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-text mb-4">Tecnologia che serve le persone</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                LuxCode nasce da una convinzione semplice: ogni persona e ogni azienda merita tecnologia che funziona davvero. Non soluzioni complicate, non strumenti che restano inutilizzati, ma qualcosa di concreto che semplifica la vita e fa crescere chi la usa.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Lavoriamo con la precisione che si impara solo dove gli standard sono altissimi. Ogni progetto viene costruito su misura, con cura artigianale e tecnologia all'avanguardia. Non esistono clienti piccoli o grandi: esiste solo il lavoro fatto bene.
              </p>
            </div>
            <div className="flex-shrink-0">
              <IllustrationAzienda />
            </div>
          </div>
        </section>

        {/* Sezione 2 - La missione */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-text mb-4">La nostra missione</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Crediamo che il digitale non debba essere un privilegio di chi ha grandi budget. La nostra missione consiste nel rendere accessibili a tutti gli strumenti che fino a ieri erano riservati alle grandi aziende: siti web professionali, intelligenza artificiale, automazioni che liberano tempo e risorse.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Tutto questo con un approccio umano, diretto e senza complicazioni.
              </p>
            </div>
            <div className="flex-shrink-0">
              <IllustrationMissione />
            </div>
          </div>
        </section>

        {/* Sezione 3 - I valori */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-text mb-4">I nostri valori</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Tre parole guidano ogni cosa che facciamo.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="text-text font-semibold">Precisione</span>
                    <span className="text-text-secondary"> - Qualit&#224; svizzera nella cura di ogni dettaglio.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <span className="text-text font-semibold">Concretezza</span>
                    <span className="text-text-secondary"> - Risultati reali, misurabili, tangibili.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <div>
                    <span className="text-text font-semibold">Cura</span>
                    <span className="text-text-secondary"> - Attenzione autentica per le persone che si affidano a noi.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <IllustrationValori />
            </div>
          </div>
        </section>

        {/* Sezione 4 - EMAR */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-text mb-4">Il significato di EMAR</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                EMAR non &#232; un acronimo tecnico. &#200; un legame. Racchiude le iniziali delle persone che danno senso e forza a questo progetto: la famiglia.
              </p>
              <p className="text-text-secondary leading-relaxed">
                La tecnologia senza uno scopo &#232; vuota, ma quando nasce da qualcosa di vero diventa qualcosa di grande. Ogni lavoro che esce da LuxCode porta dentro quella stessa cura, quello stesso amore.
              </p>
            </div>
            <div className="flex-shrink-0">
              <IllustrationEMAR />
            </div>
          </div>
        </section>

        {/* Sezione 5 - Fondatore */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-border bg-surface/50 p-8 flex flex-col sm:flex-row items-center gap-8">
              {/* Placeholder foto */}
              <div className="w-32 h-32 rounded-full bg-surface-light border border-border flex items-center justify-center shrink-0 overflow-hidden">
                {/* Sostituisci questo div con un tag img quando hai la foto */}
                {/* <img src="/foto-fondatore.jpg" alt="Fondatore LuxCode" className="w-full h-full object-cover" /> */}
                <img src="/foto-logo.jpg" alt="Fondatore LuxCode" className="w-full h-full object-cover" />
              </div>
              {/* Bio */}
              <div>
                <h3 className="text-lg font-bold text-text mb-1">Fondatore di LuxCode</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed">
                  Informatico con esperienza internazionale maturata in Svizzera, ha guidato la trasformazione digitale di realt&#224; aziendali nel settore energia, automatizzando oltre 30 processi e formando team sulle nuove tecnologie. Oggi porta la stessa visione e lo stesso rigore al servizio di privati e aziende attraverso LuxCode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-text-secondary mb-6">Vuoi saperne di pi&#249;?</p>
          <a
            href="/contatti"
            className="inline-flex font-semibold text-background bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 text-lg tracking-wide"
          >
            Contattaci
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}