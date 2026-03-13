
import { useCancer } from "@/Cancer_context"

const CancerInfo = () => {
  const { cancerType } = useCancer()
  const isBreast = cancerType === "sein"

  if (!isBreast) return null

  return (
    <section className="py-24 lg:py-32 bg-pink-50/90">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Titre centré full-width */}
        <div className="text-center mb-20 w-full">
          <h2 className="waterfall-regular text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none font-black inline-block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl pb-8 mx-auto max-w-5xl">
            Comprendre en bref le cancer du sein
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
          {/* Texte simple paragraphes - full width mobile */}
          <div className="w-full lg:pr-16 order-2 lg:order-1 space-y-8">
            <div className="space-y-6 text-lg lg:text-xl bitter-regular leading-relaxed text-muted-foreground w-full">
              <p>
                <strong>Histoire en Afrique :</strong> Reconnu depuis l'Antiquite, 1er cancer feminin. Diagnostic tardif (stade III-IV 70% cas). Screening mammographie limite, education prevention cle.
              </p>
              <p>
                <strong>Chiffres Afrique :</strong> 200 000 nouveaux cas/an. Mortalite 3x superieure pays riches. 60% cas avant 50 ans (population jeune). 1 femme sur 10 au risque.
              </p>
              <p>
                <strong>Risques :</strong> Age superieur a 50 ans, hereditaire (BRCA), alcool, obesite, sedentarite. 
                <strong>Symptômes :</strong> Masse palpable, retraction mamelon, ecoulement, peau d'orange.
              </p>
              <p className="font-semibold text-foreground text-xl bg-gradient-to-r from-pink-100/80 to-rose-100/60 px-6 py-4 rounded-xl border-l-4 border-pink-400 shadow-md">
                <strong>90% guerison</strong> si detecte stade 1 grace au depistage !
              </p>
            </div>
          </div>

          {/* Image droite */}
          <div className="order-1 w-full lg:max-w-lg lg:self-start lg:-mr-16 xl:-mr-24">
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl lg:shadow-3xl bg-gradient-to-br from-pink-50/90 to-white/80 border border-pink-200/70 hover:shadow-pink-500/40 hover:scale-[1.01] transition-all duration-700 group">
              <img 
                src="/illustration1.webp" 
                alt="Illustration cancer du sein Afrique - ruban rose sensibilisation"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" 
              />
              
            </div>
          </div>
        </div>

        
       
      </div>
    </section>
  )
}

export default CancerInfo

