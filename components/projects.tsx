import { SectionHeading } from "@/components/section-heading"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Customer Churn Analysis",
    description:
      "Analyzed telecom customer data to identify churn patterns and key drivers. Cleaned and merged multiple datasets, then built and compared ML models — Gradient Boosting achieved top performance.",
    tags: ["Python", "Pandas", "Power BI", "ML"],
  },
  {
    title: "Customer Behavior Analysis",
    description: "Explored 3,900 customer transactions to identify spending trends, product preferences, subscription patterns, and key revenue drivers, providing actionable insights for data-driven decision-making.",
    tags: ["Python", "SQL", "Power BI"],
  },
  {
    title: "COVID-19 Data Exploration in SQL",
    description:
      "Analyzed global COVID-19 data using SQL — joins, CTEs, and window functions — to evaluate infection rates, mortality, and vaccination trends across countries.",
    tags: ["SQL", "CTEs", "Window Functions"],
  },
  {
    title: "Bike Sales Excel Dashboard",
    description: "Analyzed the demographic data of a retail store's customer base to understand the key characteristics of individuals who purchase bicycles. The goal is to identify trends in income, age, commute distance, and region to help target marketing efforts more effectively.",
    tags: ["Excel"],
  },
  {
    title: "Nashville Housing Data Cleaning in SQL",
    description: "Transformed raw real estate sales data into a clean, analysis-ready dataset using Microsoft SQL Server (T-SQL), improving data quality and consistency for reporting, visualization, and further analysis.",
    tags: ["SQL", "Data Cleaning", "Data Transformation", "Microsoft SQL Server"],
  },
  {
    title: "COVID-19 Tableau Dashboard",
    description: "This Tableau dashboard provides a comprehensive global overview of epidemiological data, tracking total cases, mortality metrics, and regional impacts from 2020 through 2026 (including future forecasting).",
    tags: ["Tableau", "Data Visualization"],
  },
  {
    title: "SpaceX Falcon 9 Landing Prediction",
    description:
      "Developed classification models to predict Falcon 9 landing success using data from the SpaceX API and web scraping. Conducted EDA with SQL and deployed an interactive Plotly Dash dashboard.",
    tags: ["Python", "SQL", "Web Scraping", "Plotly Dash"],
  },

]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading index="03" title="Projects" />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
