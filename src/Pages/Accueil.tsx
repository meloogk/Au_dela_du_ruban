import StaggeredMenu from "@/components/StaggeredMenu"
import { Switch } from "@/components/ui/switch"
import { useCancer } from "../Cancer_context"
import Hero from "@/components/Home/Hero"
import CancerInfo from "@/components/Home/CancerInfo"
import Footer from "@/components/Layout/Footer"

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

  {/* SWITCH */}
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

  {/* EMOJI PROSTATE */}
  <span
    className={`text-lg transition-opacity duration-300 ${
      isProstate ? "opacity-100" : "opacity-40"
    }`}
    aria-hidden
  >
    💙
  </span>

</div>


      {/* MENU ORIGINAL */}
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
    
<Footer/>
    </div>
  )
}

export default Home
