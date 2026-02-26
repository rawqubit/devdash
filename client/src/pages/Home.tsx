import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Code2, Zap, Layers } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI-Terminal-Assistant",
      description: "Command-line tool powered by AI to help with terminal commands and debugging.",
      tags: ["Python", "OpenAI", "CLI"],
      github: "https://github.com/yourusername/ai-terminal-assistant",
      featured: true,
    },
    {
      id: 2,
      title: "SnippetVault",
      description: "Local-first code snippet manager with tagging, search, and beautiful terminal UI.",
      tags: ["Python", "SQLite", "Rich"],
      github: "https://github.com/yourusername/snippet-vault",
      featured: false,
    },
    {
      id: 3,
      title: "DevDash",
      description: "Modern portfolio template for developers with glassmorphic design and smooth animations.",
      tags: ["React", "Tailwind", "TypeScript"],
      github: "https://github.com/yourusername/devdash",
      featured: false,
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
    { category: "Backend", items: ["Python", "Node.js", "FastAPI", "Express"] },
    { category: "Tools", items: ["Git", "Docker", "CLI Tools", "APIs"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            DevDash
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              Projects
            </Button>
            <Button variant="ghost" size="sm">
              Skills
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-accent/20 border border-accent/50 text-accent text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Build Amazing <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore my collection of open-source projects, tools, and experiments. Each project is crafted with attention to detail and designed to solve real problems.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              View Projects
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Featured Project</h2>
        <Card className="overflow-hidden border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent/60 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div
              className="rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-medium">Featured</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">AI-Terminal-Assistant</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                A powerful CLI tool that brings AI intelligence directly to your terminal. Get instant help with terminal commands, debugging, and scripting challenges.
              </p>
              <div className="flex gap-2 mb-6 flex-wrap">
                {["Python", "OpenAI", "Click", "Rich"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-accent/90" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Projects Grid */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className={`w-8 h-8 ${hoveredProject === project.id ? "text-accent" : "text-muted-foreground"} transition-colors`} />
                  {project.featured && <Zap className="w-5 h-5 text-accent" />}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow text-sm">{project.description}</p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-xs bg-secondary/30 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-accent hover:text-accent hover:bg-accent/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div
          className="rounded-lg p-12 border border-border/50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 rounded-lg bg-background/70 backdrop-blur-sm" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent" />
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-muted-foreground hover:text-accent transition-colors">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always interested in new projects and opportunities. Feel free to reach out on GitHub or connect with me.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            Follow on GitHub
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 DevDash. Built with React, Tailwind, and passion for open source.</p>
        </div>
      </footer>
    </div>
  );
}
