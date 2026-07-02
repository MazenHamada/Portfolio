import { SectionHeading } from "@/components/section-heading"
import { BarChart3, Brain, Database, Wrench } from "lucide-react"

const groups = [
  {
    icon: Database,
    title: "Data Analysis",
    items: ["SQL", "Excel", "Python", "Pandas", "NumPy"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    items: ["Power BI", "Tableau", "Looker Studio"],
  },
  {
    icon: Wrench,
    title: "Data Techniques",
    items: [
      "Data Modeling",
      "Data Cleaning",
      "EDA",
      "Data Transformation",
      "Web Scraping",
      "API Data Collection",
    ],
  },
  {
    icon: Brain,
    title: "ML / DL",
    items: ["Regression", "Classification", "Deep Learning (CNN, RNN)", "Model Evaluation"],
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

      <div className="mt-4 rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-3 font-medium text-foreground">Soft Skills &amp; Languages</h3>
        <div className="flex flex-wrap gap-2">
          {["Communication", "Presentation", "Analytical Thinking", "English — Proficient", "Arabic — Native"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
