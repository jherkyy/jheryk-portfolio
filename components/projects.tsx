"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "./scroll-reveal"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { ImageCarousel } from "./image-carousel"

const projectsData = {
  zapier: [
    {
      emoji: "🧩",
      title: "Automated Lead Qualification & Outreach Workflow",
      tagline: '"Smarter lead qualification, faster outreach."',
      overview:
        "A Zapier automation that captures, enriches, and prioritizes leads in real time — automatically generating AI-personalized outreach emails.",
      problem:
        "Manual lead qualification and email drafting delayed response times and reduced engagement opportunities.",
      solution:
        "The system collects incoming leads, enriches their data through APIs, and scores them in Google Sheets. High-priority leads trigger notifications to the sales team, while Google Gemini drafts personalized follow-up emails to boost engagement speed.",
      result:
        "Showcases how automation can cut lead response time by over 70%, creating faster, more personalized sales communication.",
      tools: ["Zapier", "Google Sheets", "Google Gemini", "Gmail"],
      images: [
        "/Project-Screenshots/Zapier/Automated-Lead-Qualification-&-Outreach-Workflow/1.png",
        "/Project-Screenshots/Zapier/Automated-Lead-Qualification-&-Outreach-Workflow/2.png",
        "/Project-Screenshots/Zapier/Automated-Lead-Qualification-&-Outreach-Workflow/3.png"
      ],
    },
    {
      emoji: "🧩",
      title: "Client Lifecycle Automation",
      tagline: '"Streamlined onboarding for a smoother client journey."',
      overview:
        "An end-to-end client workflow automation that handles onboarding, nurturing, and follow-ups — ensuring a seamless client experience from start to finish.",
      problem:
        "Businesses often faced inconsistent communication and manual tracking during client onboarding and service delivery.",
      solution:
        "Using Asana as the central hub, the workflow automates project folder creation in Google Drive, triggers onboarding tasks, and sends automated follow-up and milestone emails via Gmail — all based on Asana status updates.",
      result:
        "This workflow illustrates how automation improves client satisfaction, reduces admin time, and ensures timely communication throughout the customer journey.",
      tools: ["Zapier", "Asana", "Google Drive", "Gmail"],
      images: [
        "/Project-Screenshots/Zapier/Client-Lifecycle-Automation/1.png",
        "/Project-Screenshots/Zapier/Client-Lifecycle-Automation/2.png",
        "/Project-Screenshots/Zapier/Client-Lifecycle-Automation/3.png"
      ],
    },
    {
      emoji: "🧩",
      title: "Social Media Content Repurposing Automation",
      tagline: '"One idea, endless social media posts."',
      overview:
        "A content repurposing system that converts a single audio or video file into multiple ready-to-publish posts.",
      problem: "Content creators spent hours transcribing and reformatting media manually for different platforms.",
      solution:
        "When a new media file is added to Google Drive, the automation uses OpenAI Whisper API to transcribe it, generates two unique blog-style posts with titles and AI-generated images, and prepares them for platform distribution.",
      result:
        "Demonstrates how AI can streamline content workflows, reducing transcription and editing time by up to 80%.",
      tools: ["Zapier", "Google Drive", "OpenAI Whisper API", "Gmail"],
      images: [
        "/Project-Screenshots/Zapier/Social-Media-Content-Repurposing-Automation/1.png",
        "/Project-Screenshots/Zapier/Social-Media-Content-Repurposing-Automation/2.png",
        "/Project-Screenshots/Zapier/Social-Media-Content-Repurposing-Automation/3.png",
        "/Project-Screenshots/Zapier/Social-Media-Content-Repurposing-Automation/4.png"
      ],
    },
    {
      emoji: "🧩",
      title: "AI-Powered Multi-Channel Content Engine",
      tagline: '"Consistent content everywhere — with zero extra effort."',
      overview:
        "An advanced social content engine that converts one content idea into tailored posts for LinkedIn, Twitter (X), and Instagram.",
      problem:
        "Maintaining consistent, platform-specific content across multiple channels is time-consuming and error-prone.",
      solution:
        "The automation sends a topic from Google Sheets to Google Gemini, which generates posts optimized for each platform. It integrates Buffer for scheduling, overcoming API limitations for seamless publishing.",
      result:
        "Demonstrates how AI-driven automation can maintain consistency and reduce social content production time by up to 80%.",
      tools: ["Zapier", "Google Sheets", "Google Gemini", "Buffer", "LinkedIn", "Twitter (X)", "Instagram"],
      images: [
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/1.png",
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/2.png",
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/3.png",
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/4.png",
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/5.png",
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/6.png",
        "/Project-Screenshots/Zapier/AI-Powered-Multi-Channel-Content-Engine/7.png"
      ],
    },
  ],
  make: [
    {
      emoji: "⚡",
      title: "Automated Xero-Asana Financial Report Integration",
      tagline: '"Seamless financial reporting, zero manual effort."',
      overview:
        "A Make.com automation that generates and attaches detailed financial reports automatically when Asana tasks are completed.",
      problem: "Teams relied on manual accounting report creation, leading to errors and delays in updates.",
      solution:
        "Triggered upon Asana task completion, the workflow retrieves data from Xero, formats it into a general ledger-style CSV, and attaches it directly to the relevant task for instant access.",
      result: "Showcases how automation ensures accurate, up-to-date financial reporting with zero manual effort.",
      tools: ["Make.com", "Xero", "Asana"],
      images: [
        "/Project-Screenshots/Make/Automated-Xero-Asana-Financial-Report-Integration/1.png",
        "/Project-Screenshots/Make/Automated-Xero-Asana-Financial-Report-Integration/2.png"
      ],
    },
    {
      emoji: "⚡",
      title: "Intelligent Gmail Attachment Processing & Filing Automation",
      tagline: '"AI-powered document organization made effortless."',
      overview:
        "An intelligent Make.com system that renames, stores, and tracks Gmail attachments automatically using AI.",
      problem: "Handling and organizing email attachments manually consumed time and caused disorganization.",
      solution:
        "The automation uses Google Gemini to analyze attachment content, auto-generate descriptive filenames, move them to Google Drive, log details in Google Sheets, and send users an organized summary email.",
      result: "Demonstrates efficient, AI-enhanced email management and removes repetitive file-handling tasks.",
      tools: ["Make.com", "Gmail", "Google Drive", "Google Sheets", "Google Gemini"],
      images: [
        "/Project-Screenshots/Make/Intelligent-Gmail-Attachment-Processing-&-Filing-Automation/1.png",
        "/Project-Screenshots/Make/Intelligent-Gmail-Attachment-Processing-&-Filing-Automation/2.png",
        "/Project-Screenshots/Make/Intelligent-Gmail-Attachment-Processing-&-Filing-Automation/3.png",
        "/Project-Screenshots/Make/Intelligent-Gmail-Attachment-Processing-&-Filing-Automation/4.png"
      ],
    },
    {
      emoji: "⚡",
      title: "E-Commerce Order Support Automation",
      tagline: '"Smart automation for end-to-end order management."',
      overview: "An e-commerce order management workflow connecting Shopify, Airtable, Zendesk, Gmail, and Slack.",
      problem: "Manual tracking and communication across multiple tools caused delays and missed customer issues.",
      solution:
        "The workflow logs new Shopify orders in Airtable, sends order confirmations or shipping updates via Gmail, alerts internal teams in Slack, and creates Zendesk tickets for failed payments.\n\nNote: Since Shopify's order trigger requires a paid plan, a simulated webhook + Postman setup was used to model real-world functionality.",
      result:
        "Demonstrates how multi-tool automation can centralize order management, reducing delays and improving customer satisfaction.",
      tools: ["Make.com", "Shopify", "Airtable", "Slack", "Zendesk", "Gmail"],
      images: [
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/1.png",
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/2.png",
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/3.png",
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/4.png",
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/5.png",
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/6.png",
        "/Project-Screenshots/Make/E-Commerce-Order-Support-Automation/7.png"
      ],
    },
  ],
  n8n: [
    {
      emoji: "💬",
      title: "AI Agent for Facebook Customer Inquiries",
      tagline: '"Dynamic AI support for instant customer replies."',
      overview:
        "An AI Agent that replies automatically to Facebook Page messages using a real-time knowledge base powered by Google Docs.",
      problem:
        "Businesses faced long response times and inconsistent information when handling customer messages manually.",
      solution:
        "The workflow connects n8n with the Facebook API and Google Docs, enabling the AI to instantly generate accurate, context-based replies that update dynamically as the Docs content changes.",
      result:
        "Demonstrates how AI chat automation can maintain consistent communication while reducing response time to near-instant.",
      tools: ["n8n", "Facebook API", "Google Docs", "AI Integration"],
      images: [
        "/Project-Screenshots/n8n/AI-Agent-for-Facebook-Customer-Inquiries/1.png"
      ],
    },
    {
      emoji: "💼",
      title: "AI-Powered Sales Prospecting & Outreach Engine",
      tagline: '"Personalized sales outreach at scale."',
      overview:
        "An intelligent n8n workflow that automates prospect research, outreach, and CRM integration for sales teams.",
      problem: "Sales representatives wasted hours on manual lead enrichment, personalization, and follow-ups.",
      solution:
        "The system ingests leads from Google Sheets, enriches them using Apify (LinkedIn data), drafts personalized outreach emails through Google Gemini, tracks responses in HubSpot, and uses Slack alerts for failures or updates.",
      result:
        "Simulates a full-scale AI-driven outreach system that can save teams 10+ hours weekly while improving consistency and personalization.",
      tools: ["n8n", "Google Sheets", "Apify", "LinkedIn", "Google Gemini", "HubSpot", "Slack"],
      images: [
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/1.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/2.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/3.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/4.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/5.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/6.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/7.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/8.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/9.png",
        "/Project-Screenshots/n8n/AI-Powered-Sales-Prospecting-and-Outreach-Engine-1/10.png",
      ],
    },
    {
      emoji: "🧠",
      title: "Multi-Platform Content Generator & Scheduler",
      tagline: '"AI-driven content creation from topic to post."',
      overview:
        "A fully automated n8n workflow that creates, reviews, and publishes AI-generated social media posts across platforms.",
      problem: "Marketing teams struggled to manage content creation, visual design, and posting schedules manually.",
      solution:
        "Triggered by an Airtable webhook, the automation uses Google Gemini to generate platform-specific copy and Kie.ai API to produce matching visuals. It manages review via email approval, schedules posts, updates Airtable with status, and sends summary reports after publishing.",
      result:
        "Demonstrates a scalable, AI-assisted content system that can reduce creative workload by up to 75% and maintain consistent posting across channels.",
      tools: ["n8n", "Airtable", "Google Gemini", "Kie.ai API", "Facebook", "Twitter (X)", "Reddit", "Gmail"],
      images: [
        "/Project-Screenshots/n8n/Multi-Platform-Content-Generator-and-Scheduler/1.png",
        "/Project-Screenshots/n8n/Multi-Platform-Content-Generator-and-Scheduler/2.png"
      ],
    },
        {
      emoji: "🌤️",
      title: "Automated Daily Weather Forecast for Facebook",
      tagline: '"Automated daily weather updates with an inspiring touch."',
      overview:
        "A fully automated n8n workflow that generates and posts a daily weather forecast with an inspirational quote on Facebook at 8:00 AM.",
      problem: "Manually designing and posting daily weather updates and quotes takes time and limits consistency for social media managers.",
      solution:
        "Triggered by a daily schedule, the automation uses an AI Agent to generate a unique quote (checked against an n8n Data Table for duplicates), retrieves real-time weather via OpenWeatherMap, sources a matching image using Google Custom Search, and selects icons from Google Drive. The post image is then dynamically generated through Templated.io and published automatically to Facebook via the Graph API.",
      result:
        "Demonstrates how AI and automation can deliver engaging, data-driven daily content while reducing manual workload and maintaining consistent social media activity.",
      tools: ["n8n", "AI Agent", "n8n Data Table", "OpenWeatherMap", "Google Custom Search", "Google Drive", "Templated.io", "Facebook Graph", "API Integration"],
      images: [
        "/Project-Screenshots/n8n/Automated-Daily-Weather-Forecast-for-Facebook/1.png",
        "/Project-Screenshots/n8n/Automated-Daily-Weather-Forecast-for-Facebook/2.png",
        "/Project-Screenshots/n8n/Automated-Daily-Weather-Forecast-for-Facebook/3.png",
        "/Project-Screenshots/n8n/Automated-Daily-Weather-Forecast-for-Facebook/4.png"
      ],
    },
  ],
}

const platforms = [
  {
    id: "zapier",
    icon: "/logos/zapier-icon.jpeg",
    name: "Zapier",
  },
  {
    id: "make",
    icon: "/logos/make-icon.jpeg",
    name: "Make",
  },
  {
    id: "n8n",
    icon: "/logos/n8n-icon.png",
    name: "n8n",
  },
]

export function Projects() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("zapier")
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                selectedPlatform === platform.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card hover:bg-accent"
              }`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={platform.icon || "/placeholder.svg"}
                  alt={`${platform.name} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain rounded"
                />
                <span
                  className={`font-semibold text-lg ${
                    selectedPlatform === platform.id
                      ? "text-primary-foreground"
                      : mounted && resolvedTheme === "dark"
                        ? "text-foreground"
                        : "text-foreground"
                  }`}
                >
                  {platform.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {projectsData[selectedPlatform as keyof typeof projectsData].map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="modern-card p-8">
                <div className="space-y-6">
                  {/* Title with emoji */}
                  <div>
                    <h3 className="text-2xl font-bold text-balance mb-2">
                      {project.emoji} {project.title}
                    </h3>
                    <p className="text-primary italic text-lg">💡 {project.tagline}</p>
                  </div>

                  {/* Overview */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                  </div>

                  {/* Problem */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.solution}</p>
                  </div>

                  {/* Result & Impact */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Result & Impact</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">Project Screenshots</h4>
                    <ImageCarousel images={project.images} alt={project.title} />
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-sm px-3 py-1">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
