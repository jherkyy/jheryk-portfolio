"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, X } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

const platformProjects = {
  zapier: [
    {
      title: "Client Lifecycle Automation",
      tagline: '💡 "Streamlined onboarding for a smoother client journey."',
      description:
        "Automated client onboarding and lead nurturing system integrating Asana, Google Drive, and email workflows to streamline sales processes.",
      tools: ["Zapier", "Asana", "Google Drive", "Gmail"],
      link: "https://docs.google.com/presentation/d/15Dc-ETPxU-iGpeTNdYuo0WfO2_ufPoDRClXxOBkmAdU/edit?usp=sharing",
    },
    {
      title: "Automated Lead Qualification & Outreach Workflow",
      tagline: '💡 "Smarter lead qualification, faster outreach."',
      description:
        "Built an automation that captures and enriches leads in real time, prioritizes them, notifies sales teams, and generates personalized AI-driven outreach emails to accelerate conversions.",
      tools: ["Zapier", "Snov API", "Google Sheets", "Google Gemini", "Slack", "Gmail"],
      link: "https://docs.google.com/presentation/d/1yt3sGQPwiVjChEofkzl4i3j-y2-NcV-2atXtWicTxDk/edit?usp=sharing",
    },
    {
      title: "Social Media Content Repurposing",
      tagline: '💡 "One idea, endless social media posts."',
      description:
        "Developed a content repurposing automation that transforms a single idea into ready-to-publish posts tailored for multiple social platforms.",
      tools: ["Zapier", "Google Drive", "OpenAI Whisper API", "Facebook", "Reddit"],
      link: "https://docs.google.com/presentation/d/1L4Nhz_sULSk0m8vPFkSwU9XRqDp99rP-YZXQe4Er-R0/edit?usp=sharing",
    },
    {
      title: "AI-Powered Multi-Channel Content Engine",
      tagline: '💡 "Consistent content everywhere, with zero extra effort."',
      description:
        "Created a multi-platform publishing engine that transforms one idea into LinkedIn posts, Twitter threads, and Instagram captions. Integrated Buffer as a workaround for Twitter API limitations, ensuring smooth and scalable posting.",
      tools: ["Zapier", "Google Sheets", "Google Gemini", "Buffer", "LinkedIn", "Twitter (X)", "Instagram"],
      link: "https://docs.google.com/presentation/d/10LQzQiPX4yMzWVZqcoZ_do2ZrmrE68b5ebxLaKLoN-s/edit?usp=sharing",
    },
  ],
  make: [
    {
      title: "Automated Xero-Asana Financial Report Integration",
      tagline: '💡 "Seamless financial reporting, zero manual effort."',
      description:
        "Automated the creation and delivery of General Ledger-style financial reports by connecting Xero and Asana, ensuring accurate, real-time data without manual effort.",
      tools: ["Make.com", "Xero", "Asana"],
      link: "https://docs.google.com/presentation/d/1G7_VGezuRyMiWdxMdbHjDXqbh4_t7NTGJi0yR0d-pAE/edit?usp=sharing",
    },
    {
      title: "Intelligent Gmail Attachment Processing & Filing Automation",
      tagline: '💡 "AI-powered document organization made effortless."',
      description:
        "Streamlined file management by using AI to auto-name, organize, and log Gmail attachments into Google Drive and Sheets, while sending users clear email summaries.",
      tools: ["Make.com", "Gmail", "Google Drive", "Google Sheets", "Google Gemini"],
      link: "https://docs.google.com/presentation/d/1eQ9KkMDODqKRYKZCikhcN_Fqf6R-XUPoboX8EuJasiU/edit?usp=sharing",
    },
    {
      title: "E-Commerce Order Support Automation",
      tagline: '💡 "Smart automation for end-to-end order management."',
      description:
        "Built an end-to-end e-commerce automation that manages orders, customer updates, internal notifications, and support tickets across Shopify, Airtable, Zendesk, Gmail, and Slack.",
      tools: ["Make.com", "Shopify", "Airtable", "Slack", "Zendesk", "Gmail"],
      link: "https://docs.google.com/presentation/d/1I0UjVENL15EmCW1CfBtfqrHid68Bj3PQoSIVjT8zB_U/edit?usp=sharing",
    },
  ],
  n8n: [
    {
      title: "AI Agent for Facebook Customer Inquiries",
      tagline: '💡 "Dynamic AI support for instant customer replies."',
      description:
        "Deployed an AI Agent that instantly replies to Facebook Page inquiries with a knowledge base dynamically powered by Google Docs for real-time, consistent support.",
      tools: ["n8n", "Facebook API", "Google Docs", "AI Integration"],
      link: "https://docs.google.com/presentation/d/1x0hWGmhS7OYE4VHxkn6G5ajxrVP0IUXhBgzKZZjKidI/edit?usp=sharing",
    },
    {
      title: "AI-Powered Sales Prospecting and Outreach Engine",
      tagline: '💡 "Personalized sales outreach at scale."',
      description:
        "Designed an intelligent outreach engine that enriches leads, generates personalized cold emails, manages follow-ups, and syncs with HubSpot for scalable, automated sales engagement.",
      tools: ["n8n", "Google Sheets", "Apify", "LinkedIn", "Google Gemini", "HubSpot", "Slack", "Gmail"],
      link: "https://docs.google.com/presentation/d/1XN9B5YpgsnWY4IrcZMioU66vHvHnAGz2n-oLr76-rqc/edit?usp=sharing",
    },
  ],
}

const platforms = [
  {
    id: "zapier",
    lightLogo: "/logos/zapier-light.svg",
    darkLogo: "/logos/zapier-dark.svg",
    name: "Zapier",
    description: "Workflow automation platform",
  },
  {
    id: "make",
    lightLogo: "/logos/make-light.svg",
    darkLogo: "/logos/make-dark.svg",
    name: "Make (Integromat)",
    description: "Visual automation platform",
  },
  {
    id: "n8n",
    lightLogo: "/logos/n8n-light.svg",
    darkLogo: "/logos/n8n-dark.svg",
    name: "n8n",
    description: "Open-source workflow automation",
  },
]

export function Projects() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const { theme } = useTheme()

  const openPlatformModal = (platformId: string) => {
    setSelectedPlatform(platformId)
    document.body.style.overflow = "hidden"
  }

  const closePlatformModal = () => {
    setSelectedPlatform(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-balance mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Explore my automation projects across different platforms
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <ScrollReveal key={platform.id} delay={index * 200}>
              <Card
                className="modern-card hover:shadow-lg transition-all duration-300 cursor-pointer hover-lift click-effect"
                onClick={() => openPlatformModal(platform.id)}
              >
                <CardHeader className="text-center">
                  <div className="w-full h-20 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={theme === "dark" ? platform.darkLogo : platform.lightLogo}
                      alt={`${platform.name} logo`}
                      width={200}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm text-muted-foreground">
                    {platformProjects[platform.id as keyof typeof platformProjects].length} projects
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {selectedPlatform && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto modern-card">
              <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} Projects
                </h3>
                <Button variant="ghost" size="sm" onClick={closePlatformModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                {platformProjects[selectedPlatform as keyof typeof platformProjects].length > 0 ? (
                  <div className="grid gap-6">
                    {platformProjects[selectedPlatform as keyof typeof platformProjects].map((project, index) => (
                      <Card key={index} className="modern-card hover-lift">
                        <CardHeader>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <div className="text-sm text-primary italic font-medium mb-2">{project.tagline}</div>
                          <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Tools Used</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tools.map((tool) => (
                                <Badge key={tool} variant="outline" className="text-xs">
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project Details <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Projects coming soon for this platform!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
