import { Badge } from "@/components/ui/badge"

const skills = [
  "Zapier",
  "Make.com",
  "n8n",
  "HubSpot",
  "Monday.com",
  "Trello",
  "Airtable",
  "Google Sheets",
  "Postman",
  "REST API",
  "Webhooks",
  "API Integration",
]

export function Footer() {
  return (
    <footer className="py-12 bg-muted border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Jheryk Alboleras</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI Automation Specialist helping businesses optimize workflows and enhance efficiency through intelligent
              automation solutions.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="text-primary font-semibold">English (Conversational)</span>
              <span className="text-primary">•</span>
              <span className="text-primary font-semibold">Filipino (Native)</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Jheryk Alboleras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
