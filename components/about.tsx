import { SectionHeading } from "@/components/section-heading"

const experience = [
  {
    period: "Jun 2025 – Aug 2025",
    role: "Data Analyst — Internship",
    org: "Corelia.ai",
    points: [
      "Analyzed structured datasets using Python (Pandas, NumPy) to support business decision-making.",
      "Conducted EDA to uncover trends and anomalies, contributing to KPI tracking.",
      "Built Power BI and Streamlit dashboards for metric monitoring and reporting.",
    ],
  },
  {
    period: "Jul 2022 – Present",
    role: "Data & Reporting Specialist",
    org: "Egyptian Red Crescent",
    points: [
      "Collected and validated beneficiary and aid distribution data to ensure high accuracy.",
      "Performed data cleaning to prepare reliable datasets for analysis and reporting.",
      "Built interactive Power BI dashboards and reports to provide actionable insights.",
    ],
  },
]

const education = [
  {
    period: "2021 – 2024",
    title: "B.Sc. in Computer and Information Sciences",
    org: "Ain Shams University",
    note: "GPA 3.1 · Graduation Project Grade: A+",
  },
  {
    period: "Nov 2024 – Jun 2025",
    title: "Digital Egypt Builders Initiative (DEBI)",
    org: "MCIT — 8-month scholarship",
    note: "Track: Data Science & Cloud Computing",
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading index="01" title="About" />

      <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-foreground">
        Data Analyst with experience in cleaning, analyzing, and visualizing data using Python, SQL, Excel,
        and Power BI. I bring a strong analytical mindset and a foundational understanding of data
        science techniques to support insight-driven decision-making.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Experience
          </h3>
          <ol className="space-y-8">
            {experience.map((item) => (
              <li key={item.role} className="border-l border-border pl-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.period}
                </p>
                <p className="mt-1 font-medium text-foreground">{item.role}</p>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Education
          </h3>
          <ol className="space-y-8">
            {education.map((item) => (
              <li key={item.title} className="border-l border-border pl-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.period}
                </p>
                <p className="mt-1 font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
