"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { X, ExternalLink } from "lucide-react"

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
    image: "/work/Cutomer Behavior Dashboard.png",
    alt: "Power BI dashboard showing customer behavior analysis and spending trends",
    demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiNWNhNGRjMDktNjg3MC00NTNjLWE4OWItMmU2YTQwNWU1OTNkIiwidCI6IjAyNjU5ODhhLWU0MDQtNGRkYy1hMmEwLTY2MjUwNWMzYjc4ZiIsImMiOjh9",
  },
]

export function WorkSamples() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

  return (
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
            <div
              className="aspect-[16/10] cursor-pointer overflow-hidden border-b border-border bg-secondary"
              onClick={() => setSelectedImage(sample.image)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sample.image || "/placeholder.svg"}
                alt={sample.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{sample.title}</span>
                <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs text-accent-foreground">
                  {sample.tool}
                </span>
              </div>
              {sample.demoUrl && (
                <a
                  href={sample.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:opacity-90 w-fit"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="h-full w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
