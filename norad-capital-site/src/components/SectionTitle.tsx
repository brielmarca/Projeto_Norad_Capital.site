interface SectionTitleProps {
  children: string
  id?: string
}

export default function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight"
    >
      {children}
    </h2>
  )
}
