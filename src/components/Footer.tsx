import { MapPin, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com/meupoint", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/meupoint", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/5571999999999", label: "WhatsApp" },
  { icon: Mail, href: "mailto:contato@meupoint.com.br", label: "E-mail" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-14 px-6">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-background">
            MeuPoint
          </span>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-background/40 text-sm font-body text-center">
          © 2026 MeuPoint. Feito com 🔥 em Salvador, BA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
