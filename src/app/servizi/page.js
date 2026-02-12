"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servizi = [
  {
    id: "siti-web",
    titolo: "Siti Web Professionali",
    breve: "Siti moderni, veloci e ottimizzati per farti trovare online.",
    dettaglio: "Progettiamo e sviluppiamo siti web su misura per te, dalla singola landing page al sito completo. Ogni sito viene ottimizzato per i motori di ricerca (SEO), carica velocemente e si adatta perfettamente a tutti i dispositivi. Che tu sia un professionista, un negozio o un'azienda, avrai una presenza online che ti rappresenta davvero.",
    icona: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    vantaggi: [
      "Design personalizzato e unico",
      "Ottimizzazione SEO inclusa",
      "Responsive su tutti i dispositivi",
      "Hosting e dominio assistiti",
    ],
  },
  {
    id: "chatbot-ai",
    titolo: "Chatbot AI",
    breve: "Un assistente virtuale intelligente che lavora per te 24 ore su 24.",
    dettaglio: "Integriamo chatbot basati su intelligenza artificiale direttamente nel tuo sito o nei tuoi canali. Il chatbot risponde alle domande dei tuoi clienti, raccoglie contatti, fornisce informazioni e ti libera tempo prezioso. Configurato e addestrato sulle tue esigenze specifiche.",
    icona: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    vantaggi: [
      "Attivo 24/7 senza pause",
      "Addestrato sui tuoi contenuti",
      "Raccoglie contatti automaticamente",
      "Integrabile su sito e social",
    ],
  },
  {
    id: "automazioni",
    titolo: "Automazioni Digitali",
    breve: "Elimina le operazioni ripetitive e lascia che la tecnologia lavori per te.",
    dettaglio: "Creiamo flussi automatizzati che collegano i tuoi strumenti e semplificano il lavoro quotidiano. Dalla gestione delle email alle notifiche, dalla fatturazione ai promemoria: tutto quello che fai a mano ogni giorno viene automatizzato. Risparmi tempo, riduci gli errori e ti concentri su quello che conta.",
    icona: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12" />
      </svg>
    ),
    vantaggi: [
      "Risparmio di ore ogni settimana",
      "Zero errori nelle operazioni ripetitive",
      "Integrazione con i tuoi strumenti",
      "Scalabile con la tua crescita",
    ],
  },
  {
    id: "cybersecurity",
    titolo: "Cybersecurity Base",
    breve: "Proteggi i tuoi dati, i tuoi dispositivi e la tua privacy online.",
    dettaglio: "Analizziamo la sicurezza dei tuoi dispositivi e della tua presenza online. Ti aiutiamo a proteggere password, email, account social e dati personali. Forniamo consulenza pratica per evitare truffe, phishing e accessi non autorizzati. Pensato sia per privati che per piccole realt\u00e0 professionali.",
    icona: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    vantaggi: [
      "Audit di sicurezza completo",
      "Protezione password e account",
      "Difesa da phishing e truffe",
      "Consulenza personalizzata",
    ],
  },
  {
    id: "recupero-dati",
    titolo: "Recupero Dati",
    breve: "Recuperiamo i tuoi file da dispositivi danneggiati o formattati.",
    dettaglio: "Hai perso foto, documenti o file importanti? Interveniamo su hard disk, chiavette USB, schede SD e smartphone per recuperare i tuoi dati. Anche in caso di formattazione accidentale, danni fisici o errori di sistema, facciamo il possibile per riportare in vita i tuoi file.",
    icona: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    vantaggi: [
      "Hard disk, USB, SD, smartphone",
      "Anche dopo formattazione",
      "Diagnosi iniziale gratuita",
      "Massima riservatezza sui dati",
    ],
  },
];

function ServiceCard({ servizio }) {
  const [aperto, setAperto] = useState(false);

  return (
    <div
      onClick={() => setAperto(!aperto)}
      className={
        "cursor-pointer rounded-2xl border transition-all duration-300 " +
        (aperto
          ? "bg-surface-light border-primary/30 glow-green"
          : "bg-surface/50 border-border hover:border-primary/20 hover:bg-surface-light/50")
      }
    >
      <div className="p-6 flex items-start gap-4">
        <div className="text-primary shrink-0 mt-1">{servizio.icona}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text mb-2">{servizio.titolo}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{servizio.breve}</p>
        </div>
        <div className="shrink-0 mt-1">
          <svg
            className={
              "w-5 h-5 text-text-muted transition-transform duration-300 " +
              (aperto ? "rotate-180" : "")
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {aperto && (
        <div className="px-6 pb-6 border-t border-border-light">
          <p className="text-sm text-text-secondary leading-relaxed mt-4 mb-5">
            {servizio.dettaglio}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servizio.vantaggi.map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text-muted">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <a
              href="/contatti"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Richiedi informazioni
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Servizi() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative max-w-4xl mx-auto px-6 py-20">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-text-secondary tracking-wide">Cosa possiamo fare per te</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-text">I nostri </span>
              <span className="gradient-text">servizi</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Soluzioni digitali pensate per privati e aziende. Clicca su un servizio per scoprire i dettagli.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {servizi.map((servizio) => (
              <ServiceCard key={servizio.id} servizio={servizio} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-6">Non sai quale servizio fa per te?</p>
            <a
              href="/contatti"
              className="inline-flex font-semibold text-background bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 text-lg tracking-wide"
            >
              Parliamone insieme
            </a>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}