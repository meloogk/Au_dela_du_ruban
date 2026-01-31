import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border bg-pink-300">
      

      <div className="container mx-auto px-4 pt-16 pb-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 ">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full  flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="waterfall-regular  text-3xl text-black">Octobre Rose</span>
            </div>
            <p className=" text-md leading-relaxed mb-6 bitter-regular text-black ">
              Ensemble pour la prévention et le dépistage du cancer du sein. 
              Chaque geste compte, chaque vie compte.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-pink-600 hover:text-pink-400-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-pink-600 hover:text-pink-400-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="waterfall-regular text-3xl  mb-4 text-black">Liens rapides</h4>
            <ul className="space-y-3">
              {["Accueil", "À propos", "Dépistage", "Témoignages", "Ressources", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white hover:text-pink-600 transition-colors duration-200 text-md bitter-regular"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="waterfall-regular text-3xl  mb-4 text-foreground">Ressources</h4>
            <ul className="space-y-3">
              {[
                "Guide du dépistage",
                "Questions fréquentes",
                "Trouver un centre",
                "Soutien psychologique",
                "Recherche médicale",
                "Devenir bénévole"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white hover:text-pink-400 transition-colors duration-200 text-md"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="waterfall-regular text-3xl font-semibold mb-4 text-black">Contact</h4>
            <ul className="space-y-4 bitter-regular">
              <li className="flex items-start gap-3 ">
                <div className="h-8 w-8 rounded-full  flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-pink-400" />
                </div>
                <span className="text-muted-foreground text-sm">
                  123 Avenue de la Santé<br />75000 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-pink-400" />
                </div>
                <a href="tel:+33123456789" className="text-muted-foreground hover:text-pink-400 transition-colors text-sm">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-pink-400" />
                </div>
                <a href="mailto:contact@octobrerose.fr" className="text-muted-foreground hover:text-pink-400 transition-colors text-sm">
                  contact@octobrerose.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-2xl    text-center md:text-center bitter-regular">
              © {currentYear} Octobre Rose. Tous droits réservés.
            </p>
            
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
