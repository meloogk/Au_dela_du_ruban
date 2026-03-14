import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCancer } from "@/Cancer_context"

const CancerInfo = () => {
  const { cancerType } = useCancer()
  const isBreast = cancerType === "sein"

  const theme = isBreast
    ? {
        image: "/illustration1.webp",
        imgAlt: "Illustration octobre rose",
        sectionBg: "bg-gradient-to-b from-pink-50/90 via-white to-rose-25/50",
        titleGradient: "from-pink-500 via-rose-500 to-pink-600",
        highlightBg: "from-pink-100/80 to-rose-100/60",
        highlightBorder: "border-pink-400",
        strongText: "text-pink-600",
        buttonGradient: "from-pink-400 hover:from-pink-500 to-rose-400 hover:to-rose-500",
        buttonShadow: "hover:shadow-pink-500/25",
        imageOverlay: "bg-gradient-to-t from-pink-500/10"
      }
    : {
        image: "/illustration_prostate.webp",
        imgAlt: "Illustration novembre bleu sensibilisation",
        sectionBg: "bg-gradient-to-b from-blue-50/90 via-white to-indigo-25/50",
        titleGradient: "from-blue-500 via-indigo-500 to-blue-600",
        highlightBg: "from-blue-100/80 to-indigo-100/60",
        highlightBorder: "border-blue-400",
        strongText: "text-blue-600",
        buttonGradient: "from-blue-400 hover:from-blue-500 to-blue-400 hover:to-blue-500",
        buttonShadow: "hover:shadow-blue-500/25",
        imageOverlay: "bg-gradient-to-t from-blue-500/10"
      }

  return (
    <section className={`py-16 md:py-20 lg:py-32 overflow-hidden ${theme.sectionBg}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* Titre centré */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <h2 className={`waterfall-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black inline-block bg-linear-to-r ${theme.titleGradient} bg-clip-text text-transparent drop-shadow-xl pb-6 mx-auto max-w-5xl`}>
            Comprendre en bref le {isBreast ? "cancer du sein" : "cancer de la prostate"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start w-full">

          {/* Texte */}
          <div className="w-full lg:pr-16 order-2 lg:order-1 space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground">

            <p className="bitter-regular">
              <strong className={theme.strongText}>Une réalité encore trop fréquente :</strong> 
              En Afrique, le cancer du {isBreast ? "sein" : "prostate"} est l’un des cancers les plus diagnostiqués. 
              Beaucoup découvrent la maladie tardivement, car le dépistage reste limité ou les premiers signes sont ignorés.
            </p>

            <p className="bitter-regular">
              <strong className={theme.strongText}>Des chiffres qui interpellent :</strong> 
              Chaque année, environ <strong className={theme.strongText}>{isBreast ? "200 000 nouveaux cas de cancer du sein" : "115 000 nouveaux cas de cancer de la prostate"}</strong> sont recensés.  
              Plus de <strong className={theme.strongText}>60 % des patients</strong> sont diagnostiqués à un stade avancé.
            </p>

            <p className="bitter-regular">
              <strong className={theme.strongText}>Les facteurs de risque :</strong> 
              {isBreast
                ? " L’âge, antécédents familiaux, mutations génétiques (BRCA1/BRCA2), surpoids, consommation d’alcool."
                : " L’âge avancé, antécédents familiaux, alimentation riche en graisses animales, obésité et facteurs hormonaux."}
            </p>

            <p className="bitter-regular">
              <strong className={theme.strongText}>Les signes à surveiller :</strong> 
              {isBreast
                ? " masse, changement de forme, peau d’orange, écoulement mamelonnaire."
                : " difficultés urinaires, besoin fréquent, sang dans l’urine, douleurs pelviennes."}
              Reconnaître tôt ces signes permet une prise en charge rapide.
            </p>

            <p className={`font-bold text-base sm:text-lg md:text-xl lg:text-xl ${theme.highlightBg} px-4 sm:px-6 py-4 rounded-2xl border-l-4 ${theme.highlightBorder} shadow-md text-center`}>
              La bonne nouvelle : <strong className={theme.strongText}>{isBreast ? "9 cancers du sein sur 10" : "la majorité des cancers de la prostate"}</strong> peuvent être traités efficacement lorsqu’ils sont <strong className={theme.strongText}>détectés tôt</strong>.
            </p>

          </div>

          {/* Image responsive */}
          <div className="order-1 w-full flex justify-center lg:justify-end lg:self-start relative">

            {/* Halo décoratif mobile */}
            <div className="absolute -inset-4 rounded-full bg-pink-300/20 blur-2xl lg:hidden"></div>

            <div
              className={`
                relative overflow-hidden shadow-2xl transition-all duration-700 group
                w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72
                rounded-full
                lg:rounded-3xl
                lg:w-full lg:max-w-xl
                lg:h-[520px]
                ${theme.imageOverlay}
                border border-current hover:scale-[1.02]
              `}
            >
              <img
                src={theme.image}
                alt={theme.imgAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20 pt-12 border-t border-current">
          <Button 
            className={`group bg-linear-to-r ${theme.buttonGradient} text-black bitter-regular shadow-xl hover:shadow-2xl ${theme.buttonShadow} hover:-translate-y-1 px-12 lg:px-16 py-5 lg:py-6 text-lg lg:text-xl rounded-3xl backdrop-blur-sm border border-transparent hover:border-current transition-all duration-500 w-fit mx-auto font-semibold`}
            size="lg"
          >
            <span className="flex items-center gap-3">
              Mieux Comprendre
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default CancerInfo