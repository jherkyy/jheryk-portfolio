import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react"
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
                <h3 className="text-2xl font-semibold mb-4">About Me</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I create intelligent automation solutions that streamline processes, reduce errors, and boost productivity through process automation, API integrations, and CRM optimization.
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
                  <div className="flex-1">
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
                  <div className="flex-1">
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+63 9954966939</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Rizal, Philippines</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Professional Profiles</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Connect with me on various professional platforms to explore my work, review my experience, and gain insight into how I help businesses streamline processes and achieve greater efficiency.
                </p>
              </div>
              <div className="space-y-4">
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
                    <div className="text-muted-foreground">Professional Network & Experience</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01b87b0f2c08e42bf2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group hover-lift click-effect"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.438-5.439-5.438z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Upwork</div>
                    <div className="text-muted-foreground">Freelance Portfolio & Reviews</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://www.onlinejobs.ph/jobseekers/info/4482590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors group hover-lift click-effect"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">OnlineJobs.ph</div>
                    <div className="text-muted-foreground">Philippine Talent Profile</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
