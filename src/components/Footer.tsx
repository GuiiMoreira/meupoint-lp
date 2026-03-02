import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-background">
            MeuPoint
          </span>
        </div>
        <p className="text-background/50 text-sm font-body text-center">
          © 2026 MeuPoint. Feito com 🔥 em Salvador, BA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
