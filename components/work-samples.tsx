"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { X } from "lucide-react"

const samples = [
  {
    title: "Customer Churn Dashboard",
    tool: "Power BI",
    image: "/work/churn-dashboard.png",
    alt: "Power BI dashboard showing customer churn rate, retention metrics, and key churn drivers",
    demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTgwMmU3MTktYTJkNi00ODk4LTk0ODAtMzU0MzBhN2E4NmJkIiwidCI6IjAyNjU5ODhhLWU0MDQtNGRkYy1hMmEwLTY2MjUwNWMzYjc4ZiIsImMiOjh9&pageName=e924d61512c6925a6cb7",
  },
  {
    title: "COVID-19 Global Trends",
    tool: "Tableau",
    image: "/work/Covid-19 Dashboard.png",
    alt: "Tableau dashboard with world map, KPIs, and time-series of global COVID-19 cases",
    demoUrl: "https://public.tableau.com/app/profile/mazen.hamada1636/viz/CovidDashboard_17645050732070/Dashboard1",
  },
  {
    title: "Bike Sales Excel Dashboard",
    tool: "Excel",
    image: "/work/Bike Sales Dashboard.png",
    alt: "Excel report visualizing bike sales",
  },
  {
    title: "Customer Behavior Dashboard",
    tool: "Power BI",
    image: "/work/Customer Behavior Dashboard.png",
    alt: "Power BI dashboard showing customer behavior analysis and spending trends",
    demoUrl: "https://app.powerbi.com/view?r=********",
  },
]

export function WorkSamples() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
        <SectionHeading index="04" title="Work Samples" />

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A selection of dashboards and analyses I&apos;ve built to turn raw data into clear,
          actionable visuals.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {samples.map((sample) => (
            <figure
              key={sample.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setSelectedImage(sample.image)}
                className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary cursor-pointer transition-opacity hover:opacity-80"
                aria-label={`View ${sample.title} full size`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sample.image || "/placeholder.svg"}
                  alt={sample.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span className="font-medium text-foreground">{sample.title}</span>
                <div className="flex items-center gap-2">
                  {sample.demoUrl && (
                    <a
                      href={sample.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-xs text-primary-foreground hover:opacity-80 transition-opacity"
                    >
                      Live Demo
                    </a>
                  )}
                  <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs text-accent-foreground">
                    {sample.tool}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Enlarged work sample"
              className="h-full w-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
