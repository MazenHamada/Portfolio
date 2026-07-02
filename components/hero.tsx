import { ArrowDownRight, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Available for data roles &amp; freelance
      </p>

      <h1 className="max-w-3xl text-pretty text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
        Hi, I&apos;m Mazen — a Data Analyst
        <span className="mt-3 block text-xl font-normal text-muted-foreground md:text-2xl">
          turning messy data into clear decisions.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        I clean, analyze, and visualize data using Python, SQL, and Power BI to support
        insight-driven decision-making, with a foundation in data science and machine learning.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View projects
          <ArrowDownRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Contact me
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          Cairo, Egypt
        </span>
        <a
          href="mailto:mazen.h.badr@gmail.com"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4 text-primary" />
          mazen.h.badr@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/mazen-hamada"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="h-4 w-4 text-primary" />
          LinkedIn
        </a>
        <a
          href="https://github.com/MazenHamada"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-4 w-4 text-primary" />
          GitHub
        </a>
      </div>
    </section>
  )
}
