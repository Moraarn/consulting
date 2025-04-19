interface SectionHeadingProps {
    badge?: string
    title: string
    titleColored?: string
    description?: string
  }
  
  export function SectionHeading({ badge, title, titleColored, description }: SectionHeadingProps) {
    return (
      <div className="text-center mb-16 max-w-3xl mx-auto">
        {badge && (
          <div className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-800 dark:text-primary-300 mb-4">
            <span className="mr-1">✦</span> {badge}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title} {titleColored && <span className="text-primary-600">{titleColored}</span>}
        </h2>
        <div className="mt-4 h-1 w-20 bg-primary-600 mx-auto"></div>
        {description && <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">{description}</p>}
      </div>
    )
  }
  