import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import { useCancer } from "@/Cancer_context"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const Hero = () => {

  const { cancerType } = useCancer()
  const isBreast = cancerType === "sein"

  const theme = isBreast
    ? {
        bg: "bg-hero-gradient",
        image: "/Hero1.webp",

        textColor: "text-pink-400",
        gradientText: "text-pink-500",

        badge: "bg-pink-200 text-pink-600",
        icon: "text-pink-600",

        button1: "bg-pink-500 hover:bg-pink-600 text-white",
        button2: "bg-black text-pink-400",

        statsBg: "bg-pink-100 border-pink-300",

        stats: [
          { value: 8, prefix: "1/", suffix: "", label: "femmes touchées dans leur vie" },
          { value: 90, suffix: "%", label: "survie si détecté tôt" },
          { value: 70, suffix: "%", label: "diagnostics tardifs en Afrique" }
        ]
      }

    : {
        bg: "bg-hero-gradient",
        image: "/hero_prostate.webp",

        textColor: "text-blue-800",
        gradientText: "text-blue-800",

        badge: "bg-blue-200 text-blue-600",
        icon: "text-blue-600",

        button1: "bg-blue-500 hover:bg-blue-600 text-white",
        button2: "bg-black text-blue-400",

        statsBg: "bg-blue-100 border-blue-300",

        stats: [
          { value: 8, prefix: "1/", suffix: "", label: "hommes touchés dans leur vie" },
          { value: 95, suffix: "%", label: "survie si détecté tôt" },
          { value: 1, prefix: "#", label: "cancer masculin le plus fréquent" }
        ]
      }

  const statVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  return (

    <section className={`relative min-h-[85vh] lg:min-h-screen overflow-hidden transition-all duration-700 ${theme.bg}`}>

      {/* IMAGE BACKGROUND */}

      <img
        src={theme.image}
        alt=" cancer"
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none z-[1]"
      />

      {/* OVERLAY POUR LIRE LE TEXTE */}

      <div className="absolute inset-0 bg-black/20 z-2" />

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-10 md:pt-28 md:pb-16">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          <div className="max-w-2xl">

            {/* BADGE */}

            <span className={`inline-flex items-center gap-2 bitter-regular rounded-full px-4 py-2 text-sm font-medium mb-6 ${theme.badge}`}>
              <Heart className={`h-4 w-4 ${theme.icon}`} />
              {isBreast ? "Octobre Rose" : "Novembre Bleu"} — Sensibilisation
            </span>

            {/* TITRE */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="waterfall-regular text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
            >

              <span className={theme.textColor}>Ensemble</span> contre le{" "}

              <span className={theme.gradientText}>
                {isBreast ? "cancer du sein" : "cancer de la prostate"}
              </span>

            </motion.h1>

            {/* TEXTE */}

            <p className="bitter-regular text-lg md:text-xl  leading-relaxed mb-6 max-w-xl text-black">
              Le cancer du {isBreast ? "sein" : "la prostate"} touche des millions de personnes
              dans le monde.
            </p>

            <p className="bitter-regular text-lg md:text-xl font-semibold text-foreground leading-relaxed mb-8 max-w-xl">
              Mais détecté tôt, les chances de guérison peuvent dépasser
              {isBreast ? " 90%" : " 95%"}.
            </p>

            {/* BOUTONS */}

            <div className="flex flex-col sm:flex-row gap-4 mb-10">

              <Button className={theme.button1}>
                Se faire dépister
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button className={theme.button2}>
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 md:pt-10">

              {theme.stats.map((stat, index) => (

                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={statVariant}
                  className={`${theme.statsBg} border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >

                  <p className="waterfall-regular text-3xl md:text-4xl font-bold">

                    {stat.prefix}

                    <CountUp
                      end={stat.value}
                      duration={2}
                    />

                    {stat.suffix}

                  </p>

                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero