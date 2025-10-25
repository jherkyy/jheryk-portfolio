"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">AI Automation Specialist</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl leading-relaxed">
                Optimize workflows and enhance business efficiency with intelligent automation solutions. Skilled in
                process automation, CRM management, and API integrations that reduce manual effort and drive
                productivity.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover-lift click-effect"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1QdNqcJ1LBXKd4UUnAwTNWdulhCviBFhw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View my Resume <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 hover-lift click-effect bg-transparent"
                  asChild
                >
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    View my Projects
                  </a>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <a
                  href="mailto:jherykalboleras02@gmail.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors hover-lift"
                >
                  <Mail className="h-4 w-4" />
                  jherykalboleras02@gmail.com
                </a>
                <a
                  href="tel:+639954966939"
                  className="flex items-center gap-2 hover:text-foreground transition-colors hover-lift"
                >
                  <Phone className="h-4 w-4" />
                  +63 9954966939
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Rizal, Philippines
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="flex-shrink-0">
            <ScrollReveal delay={300}>
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl hover-lift">
                  <Image
                    src="/images/jheryk-hero.png"
                    alt="Jheryk Alboleras - AI Automation Specialist"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl -z-10"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
