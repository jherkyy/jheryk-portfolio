import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Database, Code, Users } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { BackgroundBeams } from "@/components/ui/background-beams"

const services = [
  {
    icon: Zap,
    title: "Workflow and AI Automation",
    description:
      "Streamline repetitive tasks with Zapier, Make.com, and n8n. Reduce manual effort and eliminate human error in your workflows.",
  },
  {
    icon: Code,
    title: "API Integration",
    description:
      "Connect your systems seamlessly with REST API integrations, webhooks, and custom solutions using Postman for testing.",
  },
  {
    icon: Users,
    title: "CRM Management",
    description:
      "Optimize your customer relationships with HubSpot CRM setup, customer data management, and sales process automation.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Design and manage efficient databases with Airtable, data migration solutions, and automated reporting systems.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 bg-background relative overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-balance mb-4">Services</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Comprehensive automation solutions to transform your business operations
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="hover:shadow-lg transition-shadow hover-lift click-effect">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
