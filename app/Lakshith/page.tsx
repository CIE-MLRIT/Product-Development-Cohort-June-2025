// app/Lakshith/page.tsx
"use client"

import { useEffect } from "react"
import './ani.css'

export default function SMAThemePage() {
  useEffect(() => {
    const quote = document.querySelector(".quote")
    quote?.classList.add("fade-in-text")
  }, [])

  return (
    <div className="sma-page">
      <div className="sma-hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1 className="fade-slide-up text-6xl font-bold tracking-wide">
            MLRIT COURT
          </h1>
          <p className="quote text-xl mt-6 text-center">
            "Where the Energy meets passion"
          </p>
        </div>
      </div>

      <div className="sma-body fade-slide-up">
        <h2 className="text-4xl font-semibold text-center mb-8">Core Values</h2>
        <div className="values">
          <div className="card">Honesty</div>
          <div className="card">Compassion</div>
          <div className="card">Discipline</div>
          <div className="card">Respect</div>
          <div className="card">Service</div>
        </div>
      </div>
    </div>
  )
}
