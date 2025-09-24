import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">Jheryk Alboleras</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <ThemeToggle />
          <Button asChild className="hover-lift click-effect">
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
