import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-balance mb-4">Work Experience</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Professional experience in API testing, documentation, and agile development
            </p>
          </div>
        </ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">Intern Business Analyst / Tester</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      Bapplware Technologies, Inc.
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      February 2025 - April 2025
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      Philippines
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Conducted API testing and validation, executing test cases and debugging endpoints
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Developed and maintained RESTful API documentation
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Participated in Agile sprints and daily stand-ups
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Streamlined collaboration between development and business teams
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technical Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "API Testing",
                      "Postman",
                      "REST API",
                      "Documentation",
                      "Agile",
                      "Sprint Planning",
                      "Debugging",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
