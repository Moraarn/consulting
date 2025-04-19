import Image from "next/image"

export function TrustedBySection() {
  const companies = [
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Meta", logo: "/logos/meta.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
    { name: "Adobe", logo: "/logos/adobe.svg" },
    { name: "Salesforce", logo: "/logos/salesforce.svg" },
  ]

  return (
    <section className="py-12 border-b">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium text-muted-foreground">Trusted by Leading Organizations</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={140}
                height={60}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
