import { SectionHeading } from "@/components/section-heading"

const samples = [
  {
    title: "Customer Churn Dashboard",
    tool: "Power BI",
    image: "/work/churn-dashboard.png",
    alt: "Power BI dashboard showing customer churn rate, retention metrics, and key churn drivers",
  },
  {
    title: "COVID-19 Global Trends",
    tool: "Tableau",
    image: "/work/Covid-19 Dashboard.png",
    alt: "Tableau dashboard with world map, KPIs, and time-series of global COVID-19 cases",
  },
  {
    title: "Bike Sales Excel Dashboard",
    tool: "Excel",
    image: "/work/Bike Sales Dashboard.png",
    alt: "Excel report visualizing bike sales",
  },
  {
    title: "Cutomer Behavior Dashboard",
    tool: "Power BI",
    image: "/work/Cutomer Behavior Dashboard.png",
    alt: "",
  },
]

export function WorkSamples() {
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
            <div className="aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sample.image || "/placeholder.svg"}
                alt={sample.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="flex items-center justify-between p-4">
              <span className="font-medium text-foreground">{sample.title}</span>
              <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs text-accent-foreground">
                {sample.tool}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
