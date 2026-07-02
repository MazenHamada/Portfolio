import { Mail, Phone } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "mazen.h.badr@gmail.com",
    href: "mailto:mazen.h.badr@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 111 900 7741",
    href: "tel:+201119007741",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/mazen-hamada",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/MazenHamada",
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading index="05" title="Contact" />

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let&apos;s work with your data.
          </h3>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Whether you need dashboards, data cleaning, or deeper analysis, I&apos;m always happy to
            chat about new opportunities and projects.
          </p>
          <a
            href="mailto:mazen.h.badr@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <channel.icon className="h-4 w-4" />
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {channel.label}
                </span>
                <span className="text-sm font-medium text-foreground">{channel.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
