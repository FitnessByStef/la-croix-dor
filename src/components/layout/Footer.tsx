// src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-greyLight/20 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-greyLight">
        <span>© {new Date().getFullYear()} La Croix d’Or. Tous droits réservés.</span>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link to="/mentions-legales" className="hover:text-gold transition-colors">
            Mentions légales
          </Link>

          <span className="hidden md:inline text-greyLight/50">•</span>

          <Link to="/cgv" className="hover:text-gold transition-colors">
            CGV
          </Link>

          <span className="hidden md:inline text-greyLight/50">•</span>

          <span className="text-greyLight/70">Import-export et commerce de gros et de détail en France.</span>
        </div>
      </div>
    </footer>
  );
}
