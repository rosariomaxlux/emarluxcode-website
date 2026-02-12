"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contatti() {
  const [formData, setFormData] = useState({ nome: "", email: "", messaggio: "" });
  const [inviato, setInviato] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    var subject = "Contatto da " + formData.nome + " - LuxCode";
    var body = "Nome: " + formData.nome + "%0D%0AEmail: " + formData.email + "%0D%0A%0D%0AMessaggio:%0D%0A" + formData.messaggio;
    window.open("mailto:max@emarluxcode.it?subject=" + encodeURIComponent(subject) + "&body=" + body);
    setInviato(true);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="max-w-5xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-text-secondary tracking-wide">Parliamone</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-text">Entra in </span>
              <span className="gradient-text">contatto</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Hai un progetto in mente o vuoi semplicemente saperne di pi&#249;? Scrivici, siamo qui per te.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Colonna sinistra - Info contatto */}
            <div className="flex flex-col gap-8">

              {/* Email */}
              <a href="mailto:max@emarluxcode.it" className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-text font-semibold mb-1">Email</h3>
                  <p className="text-sm text-primary">max@emarluxcode.it</p>
                  <p className="text-xs text-text-muted mt-1">Rispondiamo entro 24 ore</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/41767010723" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-text font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-primary">+41 76 701 07 23</p>
                  <p className="text-xs text-text-muted mt-1">Scrivici direttamente</p>
                </div>
              </a>

              {/* Social */}
              <div className="p-6 rounded-2xl border border-border bg-surface/50">
                <h3 className="text-text font-semibold mb-4">Seguici</h3>
                <div className="flex gap-4">

                  {/* LinkedIn */}
                  <a href="#" className="w-11 h-11 rounded-xl bg-surface-light border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300">
                    <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="w-11 h-11 rounded-xl bg-surface-light border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300">
                    <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="#" className="w-11 h-11 rounded-xl bg-surface-light border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300">
                    <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                </div>
                <p className="text-xs text-text-muted mt-3">Profili in arrivo - stay tuned!</p>
              </div>

            </div>

            {/* Colonna destra - Form */}
            <div className="rounded-2xl border border-border bg-surface/50 p-8">
              {inviato ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">Messaggio pronto!</h3>
                  <p className="text-sm text-text-secondary mb-6">
                    Si aprira il tuo client email con il messaggio compilato. Clicca invia e ti rispondiamo entro 24 ore.
                  </p>
                  <button
                    onClick={() => { setInviato(false); setFormData({ nome: "", email: "", messaggio: "" }); }}
                    className="text-sm text-primary hover:text-accent transition-colors"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-text mb-1">Scrivici un messaggio</h2>
                  <p className="text-sm text-text-muted mb-6">Compila il form e ti ricontattiamo al pi&#249; presto.</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="nome" className="block text-sm text-text-secondary mb-2">Nome</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo nome"
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-text-secondary mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="La tua email"
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="messaggio" className="block text-sm text-text-secondary mb-2">Messaggio</label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Raccontaci il tuo progetto o la tua esigenza..."
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-border text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full font-semibold text-background bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-xl hover:opacity-90 transition-all duration-300 text-base tracking-wide"
                    >
                      Invia messaggio
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}