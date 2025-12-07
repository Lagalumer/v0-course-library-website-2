import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-foreground" />
            <span className="font-semibold text-lg text-foreground">Academia de aprendizaje</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cursos
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mi progreso
            </Link>
            <Button asChild variant="outline" size="sm" className="border-border hover:bg-accent bg-transparent">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
