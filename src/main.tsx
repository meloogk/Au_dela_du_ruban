import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { CancerProvider } from "./Cancer_context"

import "./index.css"
import Home from "./Pages/Accueil"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <CancerProvider>
    <Home />
    </CancerProvider>
  </StrictMode>
)
