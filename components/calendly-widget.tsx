"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
    }
  }
}

export function CalendlyWidget() {
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/jherykalboleras02",
          text: "Schedule time with me",
          color: "#FF6B35",
          textColor: "#ffffff",
          branding: true,
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])

  return null
}
