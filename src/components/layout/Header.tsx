import { Link, NavLink } from "react-router-dom";

const navLinkBase =
  "text-sm tracking-wide uppercase hover:text-gold transition-colors";
const navLinkActive = "text-gold";

export default function Header() {
  return (
    <header className="border-b border-greyLight/20 bg-background/95 backdrop-blur sticky top-0 z-20">
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo + titre */}
      <Link to="/" className="flex items-center gap-4">
        <img 
          src={"/assets/LaCroixDorMainLogo.png"} 
          alt="La Croix d'Or" 
          className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-base text-greyLight tracking-[0.35em] uppercase font-semibold">
            La Croix d’Or
          </span>
          <span className="text-xs text-greyLight/70">
            Import-export • Gros & détail • Marques spécialisées
          </span>
        </div>
      </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/nos-marques"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Nos marques
          </NavLink>
           <NavLink
            to="/nos-services"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Nos services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
