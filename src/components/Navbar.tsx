import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/10 backdrop-blur-xl border-b border-primary-foreground/10">
      <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-primary-foreground">
            MeuPoint
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Funcionalidades", "Manifesto", "Time"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors font-body"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="bg-gradient-primary text-primary-foreground font-display font-semibold px-5 py-2 rounded-lg text-sm shadow-primary-glow hover:opacity-90 transition-opacity"
        >
          Lista de espera
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
