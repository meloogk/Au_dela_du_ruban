import { Button } from "@/components/ui/button";
import { Heart,  ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
    
      {/* Background image  */}
<img src="/Hero1.webp" alt="Hero background" className=" absolute top-0 left-0 opacity-30 pointer-events-none z-[1] "
  style={{
    width: "100%",   // largeur personnalisée
    height: "110%",   // hauteur personnalisée
    objectFit: "cover", // pour remplir le conteneur de cette taille
    objectPosition: "center", // centre l'image
  }}
/>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Contenu */}
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2  bitter-regular rounded-full bg-pink-300 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4 text-pink-600" />
                Octobre Rose — Mois de sensibilisation
              </span>
            </div>

          <h1 className="animate-fade-up-delay waterfall-regular text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
  <span className="text-pink-400">Ensemble</span> contre le{" "}
  <span className="text-gradient text-pink-400">cancer du sein</span>
</h1>
            <p className="animate-fade-up-delay-2  bitter-regular text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              La prévention et le dépistage précoce sauvent des vies. 
              Informez-vous, parlez-en autour de vous, et prenez soin de votre santé.
            </p>

            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-pink-400 text-black bitter-regular">
                Se faire dépister
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-black text-pink-400 bitter-regular " >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
  {[
    { value: "1/8", label: "femmes touchées", delay: "delay-[100ms]" },
    { value: "90%", label: "guérison si détecté tôt", delay: "delay-[200ms]" },
    { value: "50+", label: "ans : dépistage gratuit", delay: "delay-[300ms]" },
  ].map((stat, index) => (
    <div key={index} className={` animate-slide-down ${stat.delay} bg-pink-200 backdrop-blur-sm border border-pink-600 rounded-2xl p-6 text-center transition-allduration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-pink-100/70`} >
      <p className="waterfall-regular text-pink-600 text-5xl font-bold">
        {stat.value}
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        {stat.label}
      </p>
    </div>
  ))}
    </div>

          </div>

          
          
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
