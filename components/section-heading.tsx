export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
      <span className="h-px flex-1 translate-y-[-2px] bg-border" />
    </div>
  )
}
