import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/languageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saudi Spanish Club",
  description: "Connecting the Spanish-speaking community in Saudi Arabia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}