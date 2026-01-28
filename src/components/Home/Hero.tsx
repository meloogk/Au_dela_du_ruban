import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-coral/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-rose-soft/30 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      {/* Ribbon decoration */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20">
        <svg viewBox="0 0 100 150" className="w-24 md:w-32 h-auto fill-primary animate-float">
          <path d="" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4" />
                Octobre Rose — Mois de sensibilisation
              </span>
            </div>

            <h1 className="animate-fade-up-delay font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Ensemble contre le{" "}
              <span className="text-gradient">cancer du sein</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              La prévention et le dépistage précoce sauvent des vies. 
              Informez-vous, parlez-en autour de vous, et prenez soin de votre santé.
            </p>

            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl">
                Se faire dépister
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                En savoir plus
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-delay-2 grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">1/8</p>
                <p className="text-sm text-muted-foreground mt-1">femmes touchées</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">90%</p>
                <p className="text-sm text-muted-foreground mt-1">guérison si détecté tôt</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">ans: dépistage gratuit</p>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
