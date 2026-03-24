import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import { useCancer } from "@/Cancer_context"
import CountUp from "react-countup"
import { motion, useScroll, useTransform } from "framer-motion"
import { fadeUp, staggerContainer, statVariant } from "@/animations/animations"
import { useRef } from "react"

const Hero = () => {

  const { cancerType } = useCancer()
  const isBreast = cancerType === "sein"

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const theme = isBreast
    ? {
        image: "/hero.webp",
        textColor: "text-pink-800",
        gradientText: "text-pink-800",
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
          { value: 1, prefix: "#", suffix: "", label: "cancer masculin le plus fréquent" }
        ]
      }

  const title = isBreast
    ? "Ensemble contre le cancer du sein"
    : "Ensemble contre le cancer de la prostate"

  const words = title.split(" ")

  return (

    <section
      ref={ref}
      className="relative min-h-[85vh] md:min-h-screen overflow-hidden"
    >

      {/* IMAGE PARALLAX */}
      <motion.img
        src={theme.image}
        style={{ y: imageY }}
        alt="sensibilisation cancer"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* GRADIENT LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

      <div className="container relative z-10 mx-auto px-4 pt-20 md:pt-28 lg:pt-36 pb-8">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >

          {/* BADGE */}
          <motion.span
            variants={fadeUp}
            className={`inline-flex items-center gap-2 bitter-regular rounded-full px-3 py-1.5 text-xs sm:text-sm mb-4 ${theme.badge}`}
          >
            <Heart className={`h-4 w-4 ${theme.icon}`} />
            {isBreast ? "Octobre Rose" : "Novembre Bleu"} — Sensibilisation
          </motion.span>

          {/* TITRE */}
          <h1 className="waterfall-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4 md:mb-6">

            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className={`inline-block mr-2 sm:mr-3 ${
                  word.includes("sein") || word.includes("prostate")
                    ? theme.gradientText
                    : theme.textColor
                }`}
              >
                {word}
              </motion.span>
            ))}

          </h1>

          {/* TEXTE */}
          <motion.p
            variants={fadeUp}
            className="bitter-regular text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl text-dark"
          >
            Le cancer du {isBreast ? "sein" : "la prostate"} touche des millions
            de personnes dans le monde. Détecté tôt, les chances de guérison
            dépassent {isBreast ? "90%" : "95%"}.
          </motion.p>

          {/* BOUTONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12"
          >

            <Button className={`${theme.button1} text-sm sm:text-base`}>
              Se faire dépister
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <Button className={`${theme.button2} text-sm sm:text-base`}>
              En savoir plus
            </Button>

          </motion.div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {theme.stats.map((stat, index) => (

              <motion.div
                key={index}
                custom={index}
                variants={statVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${theme.statsBg} border rounded-2xl p-4 md:p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl`}
              >

                <p className="waterfall-regular text-2xl md:text-3xl lg:text-4xl font-bold">

                  {stat.prefix}
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}

                </p>

                <p className="bitter-regular text-xs sm:text-sm mt-2 text-muted-foreground">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero