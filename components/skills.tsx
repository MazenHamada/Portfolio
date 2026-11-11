import { SectionHeading } from "@/components/section-heading"
import {
  BarChart3,
  Brain,
  ClipboardList,
  Database,
  Users,
  Workflow,
} from "lucide-react"

const groups = [
  {
    icon: Database,
    title: "Data Analysis",
    items: [
      "SQL (SQL Server)",
      "Excel",
      "Python",
      "Pandas",
      "NumPy",
      "EDA",
      "KPI Reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Visualization & BI",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Row-Level Security",
      "Scheduled Refresh",
      "Tableau",
      "Looker Studio",
    ],
  },
  {
    icon: Workflow,
    title: "Data Engineering & Automation",
    items: [
      "ETL / Data Pipelines",
      "Data Modeling (Star Schema)",
      "Data Cleaning & Transformation",
      "Data Validation",
      "Reporting Automation",
    ],
  },
  {
    icon: ClipboardList,
    title: "Data Collection",
    items: [
      "KoboToolbox",
      "Microsoft Forms",
      "Web Scraping (BeautifulSoup)",
      "API Data Collection",
    ],
  },
  {
    icon: Brain,
    title: "ML / DL",
    items: [
      "Regression",
      "Classification",
      "Deep Learning (CNNs, RNNs)",
      "Model Evaluation",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills & Languages",
    items: [
      "Communication",
      "Presentation Skills",
      "Analytical Thinking",
      "English — Proficient",
      "Arabic — Native",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading index="02" title="Skills" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <group.icon className="h-4 w-4" />
              </span>
              <h3 className="font-medium text-foreground">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}