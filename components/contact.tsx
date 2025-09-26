import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-balance mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Ready to automate your business processes? Let's discuss how I can help streamline your workflows.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Start a Conversation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I specialize in creating intelligent automation solutions that save time, reduce errors, and boost
                  productivity. Whether you need process automation, API integrations, or CRM optimization, I'm here to
                  help.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:jherykalboleras02@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group hover-lift click-effect"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">jherykalboleras02@gmail.com</div>
                  </div>
                </a>
                <a
                  href="tel:+639954966939"
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group hover-lift click-effect"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+63 9954966939</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/jheryk-alboleras-29569a309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group hover-lift click-effect"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-muted-foreground">Professional Profile</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.upwork.com/freelancers/~01b87b0f2c08e42bf2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-4 rounded-lg border hover:bg-muted transition-colors hover-lift click-effect"
                >
                  <div className="font-semibold">Upwork Profile</div>
                  <div className="text-sm text-muted-foreground">View Portfolio</div>
                </a>
                <a
                  href="https://www.onlinejobs.ph/jobseekers/info/4482590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-4 rounded-lg border hover:bg-muted transition-colors hover-lift click-effect"
                >
                  <div className="font-semibold">OnlineJobs.ph</div>
                  <div className="text-sm text-muted-foreground">View Profile</div>
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your automation needs..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full hover-lift click-effect">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
