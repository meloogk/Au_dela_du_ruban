
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useCancer } from "@/Cancer_context"

const Footer = () => {
  const { cancerType } = useCancer()
  const currentYear = new Date().getFullYear()
  const isBreast = cancerType === "sein"

  return (
    <footer className={`relative bg-linear-to-r transition-colors duration-700 ${isBreast ? 'from-pink-400 via-pink-300 to-pink-500' : 'from-blue-600 via-blue-500 to-blue-400'}`}>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full flex items-center justify-center shadow-xl">
                <Heart className={`h-6 w-6 ${isBreast ? 'text-pink-100' : 'text-blue-100'}`} />
              </div>
              <span className="waterfall-regular text-3xl lg:text-4xl font-bold bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Octobre Rose
              </span>
            </div>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 font-medium opacity-90 max-w-md">
              {isBreast ? "Prévention cancer du sein" : "Prévention cancer prostate"}. Chaque dépistage compte, chaque vie compte.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`h-12 w-12 rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg ${isBreast ? 'bg-white/20 hover:bg-pink-500/80 hover:scale-110 text-white hover:text-pink-50' : 'bg-white/20 hover:bg-blue-500/80 hover:scale-110 text-white hover:text-blue-50'}`} aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`h-12 w-12 rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg ${isBreast ? 'bg-white/20 hover:bg-pink-500/80 hover:scale-110 text-white hover:text-pink-50' : 'bg-white/20 hover:bg-blue-500/80 hover:scale-110 text-white hover:text-blue-50'}`} aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`h-12 w-12 rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg ${isBreast ? 'bg-white/20 hover:bg-pink-500/80 hover:scale-110 text-white hover:text-pink-50' : 'bg-white/20 hover:bg-blue-500/80 hover:scale-110 text-white hover:text-blue-50'}`} aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`h-12 w-12 rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg ${isBreast ? 'bg-white/20 hover:bg-pink-500/80 hover:scale-110 text-white hover:text-pink-50' : 'bg-white/20 hover:bg-blue-500/80 hover:scale-110 text-white hover:text-blue-50'}`} aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="waterfall-regular text-3xl lg:text-4xl mb-6 font-bold bg-linear-to-r from-white bg-clip-text text-transparent">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {["Accueil", "Comprendre", "Prévention", "Blog", "Témoignages", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className={`block text-lg font-medium py-2 px-3 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-x-2 hover:opacity-80 ${isBreast ? 'hover:bg-pink-500/20 text-white hover:text-pink-100' : 'hover:bg-blue-500/20 text-white hover:text-blue-100'}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="waterfall-regular text-3xl lg:text-4xl mb-6 font-bold bg-linear-to-r from-white bg-clip-text text-transparent">
              Ressources
            </h4>
            <ul className="space-y-3">
              {[
                "Guide dépistage",
                "FAQ", 
                "Centres près de chez vous",
                "Soutien psychologique",
                "Recherche clinique"
              ].map((resource) => (
                <li key={resource}>
                  <button
                    type="button"
                    className={`block text-lg font-medium py-2 px-3 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-x-2 hover:opacity-80 ${isBreast ? 'hover:bg-pink-500/20 text-white hover:text-pink-100' : 'hover:bg-blue-500/20 text-white hover:text-blue-100'}`}
                  >
                    {resource}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="waterfall-regular text-3xl lg:text-4xl font-bold mb-6 bg-linear-to-r from-white bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 hover:translate-x-2 transition-all duration-300">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-xl shrink-0 ${isBreast ? 'bg-linear-to-r from-pink-400 to-rose-500' : 'bg-linear-to-r from-blue-400 to-indigo-500'}`}>
                  <MapPin className={`h-5 w-5 ${isBreast ? 'text-white' : 'text-white'}`} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1 opacity-90">Adresse</p>
                  <p className="text-lg opacity-80">
                    123 Avenue de la Santé<br />
                    75000 Paris, France
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-xl shrink-0 ${isBreast ? 'bg-linear-to-r from-pink-400 to-rose-500' : 'bg-linear-to-r from-blue-400 to-indigo-500'}`}>
                  <Phone className={`h-5 w-5 ${isBreast ? 'text-white' : 'text-white'}`} />
                </div>
                <a href="tel:+33123456789" className="text-lg font-bold hover:text-pink-200 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-xl shrink-0 ${isBreast ? 'bg-linear-to-r from-pink-400 to-rose-500' : 'bg-linear-to-r from-blue-400 to-indigo-500'}`}>
                  <Mail className={`h-5 w-5 ${isBreast ? 'text-white' : 'text-white'}`} />
                </div>
                <a href="mailto:contact@octobrerose.fr" className="text-lg font-bold hover:text-pink-200 transition-colors">
                  contact@audelàduruban.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider moderne */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-12">
            <p className={`text-xl lg:text-xl font-bold text-center md:text-left bg-linear-to-r ${isBreast ? 'from-pink-100 to-white' : 'from-blue-100 to-white'} bg-clip-text text-transparent transition-all duration-700`}>
              © {currentYear} {isBreast ? " AU DELA DU RUBAN" : " AU DELA DU RUBAN"}. Tous droits réservés.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

