import React, { createContext, useContext, useState } from "react"

type CancerType = "sein" | "prostate"

interface CancerContextType {
  cancerType: CancerType
  toggleCancerType: () => void
}

const CancerContext = createContext<CancerContextType | undefined>(undefined)

export const CancerProvider = ({ children }: { children: React.ReactNode }) => {
  const [cancerType, setCancerType] = useState<CancerType>("sein")

  const toggleCancerType = () => {
    setCancerType((prev) => (prev === "sein" ? "prostate" : "sein"))
  }

  const value = useMemo(() => ({ cancerType, toggleCancerType }), [cancerType])

  return (
    <CancerContext.Provider value={value}>
      {children}
    </CancerContext.Provider>
  )
}

export const useCancer = () => {
  const context = useContext(CancerContext)
  if (!context) {
    throw new Error("useCancer must be used within a CancerProvider")
  }
  return context
}
