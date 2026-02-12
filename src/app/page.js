import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">

          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(0,232,157,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,157,0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-text-secondary tracking-wide">Soluzioni Digitali e AI</span>
            </div>

            {/* Titolo principale */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-text">Tecnologia che</span>
              <br />
              <span className="gradient-text">lavora per te.</span>
            </h1>

            {/* Sottotitolo */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Portiamo intelligenza artificiale, automazioni e presenza digitale
              nel tuo business - <span className="text-text">senza complicazioni.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contatti"
                className="group relative font-semibold text-background bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 text-lg tracking-wide"
              >
                <span className="relative z-10">Contattami</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </a>
              <a
                href="/servizi"
                className="font-semibold text-text border border-border px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all duration-300 text-lg tracking-wide"
              >
                Scopri i servizi
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-text-muted">Qualità svizzera</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-text-muted">AI integrata</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-text-muted">Risultati rapidi</span>
              </div>
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-text-muted flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-text-muted rounded-full animate-bounce" />
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}