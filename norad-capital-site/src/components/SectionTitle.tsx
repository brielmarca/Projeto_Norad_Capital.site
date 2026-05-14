interface SectionTitleProps {
  children: string
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy-900 leading-tight">
      {children}
      <span className="block w-16 h-0.5 bg-gold mt-5 rounded-full" />
    </h2>
  )
}
