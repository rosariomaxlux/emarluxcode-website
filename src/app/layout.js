import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "LuxCode — Soluzioni Digitali & AI",
  description: "Siti web professionali, chatbot AI, automazioni digitali e cybersecurity. Qualità svizzera al servizio del tuo business.",
  keywords: "siti web, chatbot AI, automazioni, cybersecurity, Sicilia, digitale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}