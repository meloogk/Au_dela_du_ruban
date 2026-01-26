import StaggeredMenu from "@/components/StaggeredMenu"

export function Home() {
  return (
    <div className="relative min-h-screen">
      
      {/* NAVBAR / MENU */}
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

      {/* CONTENU PAGE */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="font-medium text-2xl">Hello World</div>
      </div>

    </div>
  )
}

export default Home
