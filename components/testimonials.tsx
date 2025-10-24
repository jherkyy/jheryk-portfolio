import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { BackgroundBeams } from "@/components/ui/background-beams"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "TechStart Solutions",
    content:
      "Jheryk transformed our chaotic onboarding process into a smooth, automated workflow. Our client satisfaction scores increased by 40% and we save 15 hours per week.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Digital Marketing Pro",
    content:
      "The content repurposing automation Jheryk built for us is incredible. We now create content for 5 platforms from a single idea, saving us countless hours while maintaining quality.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Project Coordinator",
    company: "Growth Agency",
    content:
      "Working with Jheryk was seamless. His API documentation skills and attention to detail helped us integrate multiple systems without any issues. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-background relative overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-balance mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed mb-2">
              Sample testimonials showcasing the type of results I deliver for clients
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              *Representative examples of client feedback and project outcomes
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="hover:shadow-lg transition-shadow hover-lift click-effect">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed pl-6">"{testimonial.content}"</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
