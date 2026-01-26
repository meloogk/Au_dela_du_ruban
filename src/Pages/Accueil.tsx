import StaggeredMenu from "@/components/StaggeredMenu"

export function Home() {
  return (
    <div className="relative min-h-screen">
      
      {/* NAVBAR / MENU */}
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={[
          { label: "Accueil", link: "/" },
          { label: "Comprendre", link: "/comprendre" },
          { label: "Prévention", link: "/prevention" },
           { label: "Blog", link: "/Blog" },
          { label: "Témoignages", link: "/temoignages" },
         { label: "Faire un Don", link: "/Dons" },
          { label: "Contact", link: "/Contact" },
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
