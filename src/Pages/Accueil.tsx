import StaggeredMenu from "@/components/StaggeredMenu"
import { Switch } from "@/components/ui/switch"
import { useCancer } from "../Cancer_context"
import Hero from "@/components/Home/Hero"
import CancerInfo from "@/components/Home/CancerInfo"
import Footer from "@/components/Layout/Footer"
import LogoLoop from "@/components/LogoLoop"
import DomeGallery from "@/components/DomeGallery"

const partners = [
  { src: "/logos/hopital.png", alt: "Hôpital partenaire", href: "#" },
  { src: "/logos/ong.png", alt: "ONG santé", href: "#" },
  { src: "/logos/labo.png", alt: "Laboratoire", href: "#" },
];

export function Home() {
  const { cancerType, toggleCancerType } = useCancer()
  const isProstate = cancerType === "prostate"

  return (
    <div className="relative min-h-screen">

    {/* SWITCH aligné au MENU */}
<div className="fixed top-4 right-18 z-50 flex items-center gap-2">

  {/* EMOJI SEIN */}
  <span
    className={`text-lg transition-opacity duration-300 ${
      !isProstate ? "opacity-100" : "opacity-40"
    }`}
    aria-hidden
  >
    🩷
  </span>

  {/* switch mode */}
  <Switch
    checked={isProstate}
    onCheckedChange={toggleCancerType}
    size="default"
    aria-label="Changer le type de cancer"
    className={`
      transition-colors
      ${isProstate
        ? "data-[state=checked]:bg-blue-500"
        : "data-[state=unchecked]:bg-pink-500"}
    `}
  />

  {/*  PROSTATE */}
  <span
    className={`text-lg transition-opacity duration-300 ${
      isProstate ? "opacity-100" : "opacity-40"
    }`}
    aria-hidden
  >
    💙
  </span>

</div>


      {/* menu  */}
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={[
          { label: "Accueil", link: "/", ariaLabel: "Aller à l'accueil" },
          { label: "Comprendre", link: "/comprendre", ariaLabel: "Comprendre le cancer" },
          { label: "Prévention", link: "/prevention", ariaLabel: "Prévention du cancer" },
          { label: "Blog", link: "/Blog", ariaLabel: "Lire le blog" },
          { label: "Témoignages", link: "/temoignages", ariaLabel: "Lire les témoignages" },
          { label: "Faire un Don", link: "/Dons", ariaLabel: "Faire un don" },
          { label: "Contact", link: "/Contact", ariaLabel: "Contacter l'équipe" },
        ]}
        colors={["#F7C6D0", "#E91E63"]}
        accentColor="#E91E63"
        menuButtonColor="#111"
        openMenuButtonColor="#E91E63"
      />

    <Hero />
    <CancerInfo />

 {/* section partenaires */}
 <div className="relative py-16">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12 md:mb-16 w-full">
      
      <h2 className={` waterfall-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black inline-block bg-linear-to-r
          ${isProstate
            ? "from-blue-500 via-indigo-500 to-blue-600"
            : "from-pink-500 via-rose-500 to-pink-600"}
          bg-clip-text text-transparent drop-shadow-xl pb-4 `} >
        Nos partenaires engagés
      </h2>
      <p className="bitter-regular text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
        Nous collaborons avec des organisations, hôpitaux et associations engagés dans la lutte contre {" "}
        <span className={isProstate ? "text-blue-600 font-semibold" : "text-pink-600 font-semibold"}>
          {isProstate ? "le cancer de la prostate" : " le cancer du sein"}
        </span>, afin d’améliorer la prévention, le dépistage et l’accompagnement des patients.
      </p>

    </div>

    {/* CONTAINER LOOP */}
    <div
      className={`
        ${isProstate ? "bg-blue-300 border-blue-700" : "bg-pink-300 border-pink-700"}
        border
        rounded-2xl
        py-8
        overflow-hidden
        transition-all
      `}
    >
      <LogoLoop
        logos={partners}
        speed={120}
        direction="left"
        logoHeight={40}
        gap={50}
        hoverSpeed={20}
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Partenaires"
      />
    </div>

  </div>
</div>

{/*  TEMOIGNAGES */}

<div className="relative py-24">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2
        className={`waterfall-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black inline-block bg-linear-to-r
        ${isProstate
          ? "from-blue-500 via-indigo-500 to-blue-600"
          : "from-pink-500 via-rose-500 to-pink-600"}
        bg-clip-text text-transparent drop-shadow-xl pb-4`}
      >
        Témoignages
      </h2>

      <p className="bitter-regular text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
        Des histoires de courage et d'espoir face au{" "}
        <span className={isProstate ? "text-blue-600 font-semibold" : "text-pink-600 font-semibold"}>
          {isProstate ? "cancer de la prostate" : "cancer du sein"}
        </span>.
      </p>
    </div>

    {/* composant DOME GALLERY */}
    <div className="w-full h-screen">
      <DomeGallery
        fit={0.5}
        minRadius={450}
        maxVerticalRotationDeg={8}
        segments={34}
        dragDampening={2}
        grayscale={false}
      />
    </div>
  </div>
</div>

<Footer/>

    </div>
  )
}

export default Home
